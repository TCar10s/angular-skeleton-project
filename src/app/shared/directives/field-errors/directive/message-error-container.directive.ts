/**
 * Directiva de validación de errores automáticamente (FromControl,FormControlName, NgModel)
 * @Version : 2.3
 *
 * Para que la directiva funcione y haga las respectivas validaciones es necesaria la etiqueta "validar"
 * al nivel igual o superior de los atributos(FromControl,FormControlName, NgModel)
 * - Ejemplo:
 *    <div validar>
 *      <input  [(ngModel)]="variable" [validaciones]="validaciones">
 *    </div>
 *    O
 *    <input validar [formControl]="variable" >
 *
 * La etiqueta "validar" puede ser remplazada en el archivo input-mensaje-errores-contenedor.directive.ts
 * una vez se encuentra un error agrega una clase al nivel del atributo "validar", el nombre de la clase de estilos
 * esta en a variable @nombreClaseError la por defecto es 'clase-invalido'
 *
 * Una vez encontrado el error es necesaria la lista estandarizada con cada uno de los errores y sus respectivos mensajes
 * la cual se encuentra en el archivo lista-errores
 *
 * Para poder renderizar en el HTMl es necesario el componente MensajeErrorPlantillaComponent
 * el cual contiene el aspecto de error
 *
 *
 * Parametros  de entrada
 * @errores => @Json
 * - Descripción: Json de con los nombres de los errores, también soporta anotaciones HTML
 * - Ejemplo:     {required: 'Elemento <b>requerido</b>'}
 * @validacionInicial => @Boolean
 * - Descripción: Es una bandera para validar si se quiere validar el input una vez renderizado el HTML
 *                por defecto @true
 * @validaciones =>
 * - Descripción: Debido a que un NgModel no tiene validaciones, por medio de esta variable le se envía
 *                un array de validaciones las cuales se le aplican normalmente a los formularios reactivos
 * - Ejemplo:     [Validators.required]
 *
 * Parametros de configuracion
 * @nombreClaseError => @string
 * - Descripción: Nombre de la clase de estilo que se agrega al encontrar un error
 *
 */

import {
  AfterViewChecked,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Host,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { NgControl, NgModel, ValidatorFn } from '@angular/forms';
import { EMPTY, merge, Observable, Subscription } from 'rxjs';
import { TemplateFieldsErrorsComponent } from '../components/template-fields-error.component';
import { FORM_ERRORS } from '../errors/list-errors';
import { MessageErrorFieldsContainerDirective } from './message-error-container-fields.directive';
import { MessageErrorFieldsSubmitDirective } from './message-error-container-submit.directive';

@Directive({
  selector: '[ngModel], [formControlName], [formControl]',
})
export class MessageErrorFieldsDirective
  implements OnInit, OnDestroy, AfterViewChecked
{
  @Input() private errores: any = {};
  @Input() private validacionInicial = false;
  @Input() private validaciones: ValidatorFn[] = [];
  private nombreClaseError = 'clase-invalido';
  private componente!: ComponentRef<TemplateFieldsErrorsComponent>;
  private container: ViewContainerRef | null;
  private estado!: Subscription;
  private submit: Observable<Event>;

  constructor(
    public vcr: ViewContainerRef,
    @Optional() controlErrorContainer: MessageErrorFieldsContainerDirective,
    @Optional() @Host() private form: MessageErrorFieldsSubmitDirective,
    @Inject(FORM_ERRORS) private errors: any,
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private control: NgControl
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : null;
    this.submit = this.form ? this.form.submit : EMPTY;
  }

  ngOnInit(): void {
    this.agregarValidaciones();
    this.escucharEstados();
  }

  ngAfterViewChecked(): void {
    this.validarErrores();
  }

  ngOnDestroy(): void {
    this.estado.unsubscribe();
  }

  private agregarValidaciones(): void {
    if (this.control instanceof NgModel && this.validaciones) {
      this.control.control.setValidators(this.validaciones);
    }
  }

  private get formControl(): any {
    return this.control?.control;
  }

  private pintarErrorEnPantalla(texto = null): void {
    try {
      if (!this.componente) {
        const factory = this.resolver.resolveComponentFactory(
          TemplateFieldsErrorsComponent
        );
        this.componente = this.container!.createComponent(factory);
      }
      this.componente.instance.text = texto;
      this.claseError(true);
    } catch (error) {}
  }

  private claseError(aplicarClase: boolean): void {
    if (this.container) {
      const contenedor = this.container.element.nativeElement;
      if (aplicarClase) {
        this.renderer.addClass(contenedor, this.nombreClaseError);
      } else {
        this.renderer.removeClass(contenedor, this.nombreClaseError);
      }
    }
  }

  private validarErrores(): void {
    try {
      if (this.formControl?.invalid && this.validarEstadoInicial) {
        const primerValor = Object.keys(this.formControl.errors)[0];
        const obtenerError = this.errors[primerValor];
        const texto =
          this.errores[primerValor] ||
          obtenerError(this.formControl.errors[primerValor]);
        this.pintarErrorEnPantalla(texto);
        this.claseError(true);
      } else {
        this.pintarErrorEnPantalla();
        this.claseError(false);
      }
    } catch (error) {}
  }

  public get validarEstadoInicial(): boolean {
    if (this.validacionInicial) {
      return this.validacionInicial;
    }
    return this.formControl.dirty || this.formControl.touched;
  }

  private escucharEstados(): void {
    this.estado = merge(this.submit, this.formControl.valueChanges).subscribe(
      () => this.validarErrores()
    );
  }
}

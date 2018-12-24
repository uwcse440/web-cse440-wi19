import {
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ModuleWithComponentFactories,
  NgModule,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MarkdownModule, MarkdownService } from "ngx-markdown";

@Component({
  selector: 'dynamic-markdown',
  templateUrl: './dynamic-markdown.component.html',
  styleUrls: ['./dynamic-markdown.component.scss']
})
export class DynamicMarkdownComponent implements OnInit {
  template: string = ``;

  @ViewChild('dynamicMarkdownContainer', { read: ViewContainerRef })
  dynamicMarkdownContainer: ViewContainerRef;

  @ViewChild('dynamicMarkdownProjection', { read: ViewContainerRef })
  dynamicMarkdownProjection: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private markdownService: MarkdownService
  ) {
  }

  ngOnInit() {
    this.template = this.dynamicMarkdownContainer.element.nativeElement.innerHTML;
    this.dynamicMarkdownContainer.element.nativeElement.innerHTML = '';
    this.template = this.markdownService.compile(this.template);
    this.compileTemplate();
  }

  compileTemplate() {
    let metadata = {
        selector: `dynamic-markdown-worker`,
        template: `${ this.template }`
    };

    let factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
    this.componentRef = this.dynamicMarkdownContainer.createComponent(factory);
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
      const cmpClass = componentClass || class RuntimeComponent {
      };
      const decoratedCmp = Component(metadata)(cmpClass);

      @NgModule({
        imports: [
          CommonModule,
          MarkdownModule.forChild(),
          RouterModule
        ],
        declarations: [decoratedCmp]
      })
      class RuntimeComponentModule { }

      let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
      return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }
}

import {AfterViewInit, Directive, TemplateRef, ViewContainerRef} from '@angular/core'

@Directive({
  selector: '[isVisible]',
})

/**
 * IS VISIBLE DIRECTIVE
 * --------------------
 * Mounts a component whenever it is visible to the user
 * Usage: <div *isVisible>I'm on screen!</div>
 */
export class IsVisibleDirective implements AfterViewInit {

  constructor(private vcRef: ViewContainerRef, private tplRef: TemplateRef<any>) {
  }

  ngAfterViewInit() {
    const observedElement = this.vcRef.element.nativeElement.parentElement

    const observer = new IntersectionObserver(([entry]) => {
      this.renderContents(entry.isIntersecting)
    })
    observer.observe(observedElement)
  }

  renderContents(isIntersecting: boolean) {

    this.vcRef.clear()

    if (isIntersecting) {
      this.vcRef.createEmbeddedView(this.tplRef)
    }
  }
}
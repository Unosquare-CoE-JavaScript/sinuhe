/// <reference path="base-component.ts"/>
/// <reference path="../decorators/autobin-decotator.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop-interfaces.ts" />

namespace App {
    export class ProjectItem extends Component<HTMLUListElement, HTMLElement> implements Draggable {
        private project: Project;

        get persons() {
            if (this.project.people === 1) {
                return '1 person';
            } else {
                return `${this.project.people} persons`;
            }
        }

        constructor(hostId: string, project: Project) {
            super('single-project', hostId, false, project.id);
            this.project = project;
            this.configure ();
            this.renderContent();
        }

        configure () {
            this.element.addEventListener('dragstart', this.dragStartHandler);
            this.element.addEventListener('dragend', this.dragEndHandler);
        }

        renderContent() {
            this.element.querySelector('h2')!.textContent = this.project.title;
            this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
            this.element.querySelector('p')!.textContent = this.project.description;
        }

        dragEndHandler(_: DragEvent): void {
            console.log('DragEnd');
        }

        @Autobind
        dragStartHandler(event: DragEvent): void {
            event.dataTransfer!.setData('text/plain', this.project.id);
            event.dataTransfer!.effectAllowed = 'move';
        }
    }
}
import { Injectable } from '@angular/core';

@Injectable()
export class ExamComponentConstants {
    private static COMPONENT_TEXTAREA = 'textArea';
    private static COMPONENT_INPUT = 'input';
    private static COMPONENT_RADIO = 'radio';
    private static COMPONENT_CHECK = 'check';

    public static getComponentTextArea(): string {
        return this.COMPONENT_TEXTAREA;
    }

    public static getComponentInput(): string {
        return this.COMPONENT_INPUT;
    }

    public static getComponentRadio(): string {
        return this.COMPONENT_RADIO;
    }

    public static getComponentCheck(): string {
        return this.COMPONENT_CHECK;
    }
}

import { ElementRef } from '@angular/core';
import { FullpageDirective } from './fullpage.directive';

describe('FullpageDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const directive = new FullpageDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});

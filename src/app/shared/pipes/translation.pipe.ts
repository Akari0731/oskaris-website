import { Pipe, PipeTransform } from '@angular/core';
import { translations } from 'src/app/constants/translations';

@Pipe({
  name: 'translation',
})
export class TranslationPipe implements PipeTransform {
  transform(value: string, language: 'en' | 'ja'): string {
    return translations[language][value] || '';
  }
}

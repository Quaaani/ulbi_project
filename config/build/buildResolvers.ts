import { ResolveOptions } from 'webpack';
 
export function buildResolvers(): ResolveOptions {
 return {
   // Файлы для которых мы не будем указывать расширение при импортах
   extensions: ['.tsx', '.ts', '.js'],
 };
}

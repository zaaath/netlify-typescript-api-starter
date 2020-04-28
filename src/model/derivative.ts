import { derivative as mathjs_derivative } from 'mathjs'

export function derivative(expr: string): string {
  return mathjs_derivative(expr, 'x').toString().replace(/\s/g,'')
}

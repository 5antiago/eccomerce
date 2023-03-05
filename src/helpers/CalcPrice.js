export const CalcPrice = (product) => ((product?.precio - product?.descuento)* product.cantidad_a_comprar)

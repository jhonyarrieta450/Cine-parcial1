const precio = calcularPrecioBoletas("Dinamix", 6, "hora no pico", "tarjeta del cine", false);
console.log(" Valor total por 6 boletas es:", precio);

function calcularPrecioBoletas(tipoSala, numBoletas, horaFuncion, tipoPago, reserva) {

  const precios = { Dinamix: 18800, "3D": 15500, "2D": 11300 };

  const horamenoscongestionada = 0.1;

  const descuentoNumBoletas = 500;

  const Reservarecargo = 2000;

  const TarjetaCine = 0.05;

  const aumentoHoraPico3D2D = 0.25;
  
  const aumentoHoraPicoDinamix = 0.5;

  let precio = precios[tipoSala];
  if (horaFuncion === "hora no pico") {
    precio *= 1 - horamenoscongestionada;
    if (numBoletas >= 3) {
      precio -= descuentoNumBoletas * (numBoletas - 2);
    }
  } else {
    if (tipoSala === "3D" || tipoSala === "2D") {
      precio *= 1 + aumentoHoraPico3D2D;
    } else {
      precio *= 1 + aumentoHoraPicoDinamix;
    }
  }

  if (tipoPago === "tarjeta del cinema") {
    precio *= 1 - TarjetaCine;
  }

  if (reserva) {
    precio += Reservarecargo;
  }

  return precio * numBoletas;
}
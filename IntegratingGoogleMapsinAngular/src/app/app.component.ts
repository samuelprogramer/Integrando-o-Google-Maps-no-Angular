import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IntegratingGoogleMapsinAngular';

  options: google.maps.MapOptions = {
    mapId: "8bbbce2e87709eb9",
    center:  { lat: -22.951916, lng: -43.210487 },
    zoom: 10,
  };

  brLocations_1: any[] = [
    { lat: -22.951916, lng: -43.210487 }, // Cristo Redentor, Rio de Janeiro
    { lat: -25.6953, lng: -54.4367 },      // Cataratas do Iguaçu, Paraná
    { lat: -22.9068, lng: -43.1729 },      // Pão de Açúcar, Rio de Janeiro
    { lat: -12.9714, lng: -38.5014 },      // Pelourinho, Salvador
    { lat: -3.119027, lng: -60.021731 },   // Teatro Amazonas, Manaus
  ];

  brLocations_2: any[] = [
    { lat: -23.5515, lng: -46.6333 },       // Avenida Paulista, São Paulo
    { lat: -20.4697, lng: -54.6201 },       // Bonito, Mato Grosso do Sul
    { lat: -21.136, lng: -44.2619 },        // Inhotim, Minas Gerais
    { lat: -22.795, lng: -43.1784 },        // Museu Imperial, Petrópolis
    { lat: -25.5477, lng: -54.5885 },       // Parque Nacional do Iguaçu, Paraná
    { lat: -22.9056, lng: -43.1344 },       // Maracanã, Rio de Janeiro
    { lat: -13.1631, lng: -74.2235 },       // Elevador Lacerda, Salvador
    { lat: -15.7998, lng: -47.8645 },       // Congresso Nacional, Brasília
    { lat: -8.0088, lng: -34.8545 },        // Recife Antigo, Recife
    { lat: -22.9714, lng: -44.3037 },       // Parque Nacional da Serra dos Órgãos, Teresópolis
    { lat: -23.9888, lng: -46.2577 },       // Santos Beach, São Paulo
    { lat: -23.9651, lng: -46.3264 },       // Praia de Juquehy, São Sebastião
    { lat: -23.5711, lng: -46.7016 },       // Parque Ibirapuera, São Paulo
    { lat: -2.5588, lng: -44.2737 },        // Lençóis Maranhenses, Maranhão
    { lat: -30.0346, lng: -51.2177 },       // Mercado Público de Porto Alegre, Porto Alegre
    { lat: -25.4278, lng: -49.2731 },       // Jardim Botânico, Curitiba
    { lat: -8.4072, lng: -37.0634 },        // Vale do Catimbau, Pernambuco
    { lat: -16.0044, lng: -48.0551 },       // Chapada dos Veadeiros, Goiás
  ];


}

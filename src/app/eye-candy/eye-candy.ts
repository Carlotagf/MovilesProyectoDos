import { Component } from '@angular/core';



@Component({
  selector: 'app-eye-candy',
  imports: [],
  templateUrl: './eye-candy.html',
  styleUrl: './eye-candy.css'
})
export class EyeCandy {
 
  
  setupCarousel(): void {
    
    const nextButton = document.querySelector<HTMLButtonElement>(".next");
    const prevButton = document.querySelector<HTMLButtonElement>(".prev");

    
    const slideContainer = document.querySelector<HTMLElement>(".slide");

    if (!nextButton || !prevButton || !slideContainer) {
        console.error("No se encontraron elementos esenciales para el carrusel (.next, .prev, o .slide).");
        return;
    }

    
    nextButton.addEventListener("click", () => {
        
        const items: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(".item");
        
        
        if (items.length > 0) {
            slideContainer.appendChild(items[0]);
        }
    });


    prevButton.addEventListener("click", () => {
        
        const items: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(".item");
        
        
        if (items.length > 0) {
            const lastItem = items[items.length - 1];
            slideContainer.prepend(lastItem);
        }
    });
}




}

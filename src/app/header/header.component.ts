import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {

    @Output() navigationEvent = new EventEmitter<string>()
    
    goToRecipes() {
        this.navigationEvent.emit("recipes")
    }

    goToShoppingList() {
        this.navigationEvent.emit("shoppingList")
    }
}
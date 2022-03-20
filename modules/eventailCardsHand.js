export default class EventailCardsHand extends CardsHand {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["eventail", "sheet", "cardsHand", "cards-config"],
            width: "auto",
            top: 150,
            resizable: false,
        })
    }


    get template() {

        return "modules/eventail/templates/eventailHand.hbs";

    }

    async activateListeners(html) {
        this.rotateCards(html);
        html.find(".card img").click(this.focusCard.bind(this));
        super.activateListeners(html);
    }


    rotateCards(html) {
        let cardsAreas = html.find('.cards');
        for (let area of cardsAreas) {
            for (let i = 0; i < area.children.length; i++) {

                let card = area.children[i];
                card.style.transform = `rotateZ(${(i*4)}deg) translateX(${i*30}px)`;
            }
            area.style.transform = `rotateZ(${-((area.children.length-1)*2)}deg) translateX(-${area.children.length*15}px)`

        }
    }
    focusCard(ev) {
        let card = ev.currentTarget.closest('li.card');
        card.classList.toggle('focusedCard');
        if (card.classList.contains("focusedCard")) {
            card.setAttribute("data-rot", card.style.transform)
            let correction = parseInt(card.parentElement.style.transform.replace("rotateZ(", "").replace(")deg", "")) * -1;
            card.style.transform = `rotateZ(${correction}deg)`

        } else {
            card.style.transform = card.getAttribute("data-rot")
        }
    }

}
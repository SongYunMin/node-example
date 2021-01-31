class Desktop{
    constructor(color, desktop) {
        this.color = color;
        this.desktop = desktop;
        this.changeDesktop();
        this.supportsTemplate();
    }

    supportsTemplate(){
        return console.log('content' in document.createElement('template'));
    }

    changeDesktop(){
        const desktop = document.querySelector("#template-desktop");
        desktop.content.querySelector(".desktop");
        let clone = document.importNode(desktop.content, true);
        document.body.appendChild(document.importNode(desktop, true));

        const desktopColor = document.querySelector(".desktop");
        // console.log(desktopColor);
        desktopColor.style.backgroundColor = this.color;

        return this;
    }
}

class Icon{
    constructor() {
    }
}

class Folder{
    constructor() {
    }
}

class Window{
    constructor() {
    }
}
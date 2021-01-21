class Desktop{
    constructor(color, desktop) {
        this.color = color;
        this.desktop = desktop;
        this.changeDesktop();
        this.supportsTemplate();
    }

    supportsTemplate(){
        return 'content' in document.createElement('template');
    }

    changeDesktop(){
        const desktop = document.querySelector("#template-desktop");
        desktop.content.querySelector(".desktop");
        let clone = document.importNode(desktop.content, true);
        document.body.appendChild(clone);

        const desktopColor = document.querySelector(".desktop");
        console.log(desktopColor);
        desktopColor.style.backgroundColor = this.color;
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
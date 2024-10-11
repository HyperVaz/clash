export const process ={
    dev: true,

}

export  const site ={
    home: process.dev ? 'http://localhost:8080/' : 'http://localhost:8080/'
}

export const app ={
    title: "Template",

}

export const links = [
    {
        title: "Home",
        alias: "Home",
        url: "/"
    },
    {
        title: "About",
        alias: "about",
        url: "/about"
    }
]
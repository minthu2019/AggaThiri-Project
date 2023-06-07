export default {
    base : "/" ,
    build : {
        rollupOptions : {
            input : {
                main : "./index.html",
                "form": "./src/form.html",
            }
        }
    }
}
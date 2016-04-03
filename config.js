/**
 * Created by dino on 28/03/16.
 */
System.config({
    baseURL: "/",
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "app": {
            "defaultExtension": "ts",
            "main": "main.ts"
        }
    }
});

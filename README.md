<img src="asset/logo.png" class="justify-center">

## Avant de commencer
Tu dois commencer par installer Angular/cli sur ta machine
- npm install -g @angular/cli.
Tu dois installer aussi TailwindCSS pour le style du projet.

npm install -D tailwindcss
npx tailwindcss init

## Commande a connaître
- ng new { Name_of_the_project }  
Cette commande te permet de crée ton dossier pour ton application web.  
(faite 'y' sur toute les installations)   
(choisissez SCSS a la question du style)

- ng generate {{ component / service }} { name_of_your_file }   
Cette commande te permet de crée de nouveau componant de travail.

- ng serve { --open }   
Cette commande te permet d'ouvrir ton dossier dans ton navigateur web.

Si vous voulez explorer plus de commande dans ce language tout est expliquer sur leur site.
[Angular Doc](https://angular.io/cli)

## Commençons
Tout d'abord faut config tailwind css qui permeteras de crée ton style de page.

<img src="asset/tailwind.png" class="justify-center">

Pour toutes les commandes [Tailwind Doc](https://tailwindui.com/components)


Une fois votre projet crée nous allons commencer remplaçé le index.html
par :  
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Workshop Angular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

# **Seconde revue de code**

## **Points à compléter**

### 1- Points manquants depuis la première revue de code

La logique de la bataille est toujours contenue dans la vue battle.vue.
Il reste à découper cette vue en plusieurs composants afin d’améliorer la lisibilité et la séparation de la logique du code.

Le CSS est encore réparti dans différents fichiers. Une centralisation ou une organisation par composant est toujours manquante. Je prévois créer une fichier style.css contenant les classes communes.

### 2- Points à améliorer et à ajouter

#### Logique de bataille

La logique de bataille a été complétée, mais elle requiert encore quelques améliorations :

 - Rééquilibrage de la mécanique de réparation de vaisseau.

 - Gestion de la difficulté des ennemis rencontrés selon la mission.
   Par exemple, on ne devrait pas affronter un ennemi de niveau expert lors de la première mission.


#### Validation du formulaire de création 

Le formulaire de création de joueur est fonctionnel. Cependant, il manque toujours la gestion de la validation des champs.

Pour le moment, j'utilise comme solution temporaire des alertes.

Exemple actuel:
```md
const nextStep = () => {
  if (step.value === 1 && !characterName.value) {
    alert('Veuillez entrer un nom pour votre personnage!')
    return
  }
  if (step.value === 2 && !selectedShipId.value) {
    alert('Veuillez selectionner un vaisseau!')
    return
  }
  step.value++
}

```

Je prévois créer des validations de formulaire plus robustes avec des messages apparaissant directement dans le formulaire.

#### Confirmation de sortie de la bataille

Pour le moment, un joueur peut quitter à tout moment la bataille. Cependant, il ne reçoit jamais de confirmation pour savoir s'il souhaite réellement quitter et perdre sa progression.

Je prévois donc ajouter un modal de confirmation permettant au joueur de confirmer s'il souhaite quitter vers le menu principal.


## **Points forts et Bonne pratique**

Pour cette seconde revue de code, je pense que mes points forts restent très similaires à ceux de la première revue de code.

La logique de bataille est complète et fonctionnelle (même si elle requiert quelques modifications au niveau du rééquilibrage) et l'application en tant que telle est fonctionnelle. 
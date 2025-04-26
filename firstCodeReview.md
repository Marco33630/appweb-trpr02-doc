# **Première revue de code**

-----------------------------

# **Points à améliorer**

## **1 - Séparation des fonctionnalités en component**

Pour cette première partie du travail pratique, j'ai constaté que certains fichiers Vue – plus particulièrement la vue Battle.vue – contiennent une grande quantité de logique qui pourrait être séparée en plusieurs composants afin de respecter le principe de séparation des responsabilités.

Actuellement, Battle.vue gère à la fois l'état du combat, les animations, l'affichage de l'interface et la logique métier. Cela rend le fichier long, complexe à lire et difficile à maintenir ou tester.


### Exemple concret et solutions proposés

    - Création de composants PlayerInfo.vue et EnemyInfo.vue pour les informations du joueur et de l'enemie.

    - BattleControls.vue pour la logique de combat 

    - Création de composants pour les modals - VictoryModal.vue

## Objectif

Meilleur lisibilité du code ainsi qu'une meilleur séparation de la logique permettant de facilité la création des tests!


## **2 - Organisation du CSS**

En analysant l’organisation du code CSS dans le projet, j’ai constaté que de nombreuses classes CSS sont réutilisées dans plusieurs composants. Actuellement, ces classes sont souvent définies localement dans les balises de chaque composant, ce qui entraîne une redondance du code.

### Exemple de redondance 

```md
/* Animations */
@keyframes noise {
  0%, 100% {background-position: 0 0;}
  10% {background-position: -5% -10%;}
  20% {background-position: -15% 5%;}
  30% {background-position: 7% -25%;}
  40% {background-position: 20% 25%;}
  50% {background-position: -25% 10%;}
  60% {background-position: 15% 5%;}
  70% {background-position: 0 15%;}
  80% {background-position: 25% 35%;}
  90% {background-position: -10% 10%;}
}

@keyframes opacity {
  0% {opacity: 0.6;}
  20% {opacity: 0.3;}
  35% {opacity: 0.5;}
  50% {opacity: 0.8;}
  60% {opacity: 0.4;}
  80% {opacity: 0.7;}
  100% {opacity: 0.6;}
}

@keyframes scanlines {
  from {
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 51%);
    background-size: 100% 4px;
  }
  to {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 50%, transparent 51%);
    background-size: 100% 4px;
  }
}

@keyframes rgbText {
  0% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
  }
  25% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
  }
  45% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 5px 0 1px rgba(251, 0, 231, 0.8), 0 5px 1px rgba(0, 233, 235, 0.8), -5px 0 1px rgba(0, 242, 14, 0.8), 0 -5px 1px rgba(244, 45, 0, 0.8), 5px 0 1px rgba(59, 0, 226, 0.8);
  }
  50% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), -5px 0 1px rgba(251, 0, 231, 0.8), 0 -5px 1px rgba(0, 233, 235, 0.8), 5px 0 1px rgba(0, 242, 14, 0.8), 0 5px 1px rgba(244, 45, 0, 0.8), -5px 0 1px rgba(59, 0, 226, 0.8);
  }
  55% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 3px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
  }
  90% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), -5px 0 1px rgba(251, 0, 231, 0.8), 0 5px 1px rgba(0, 233, 235, 0.8), 5px 0 1px rgba(0, 242, 14, 0.8), 0 -5px 1px rgba(244, 45, 0, 0.8), 5px 0 1px rgba(59, 0, 226, 0.8);
  }
  100% {
    text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 5px 0 1px rgba(251, 0, 231, 0.8), 0 -5px 1px rgba(0, 233, 235, 0.8), -5px 0 1px rgba(0, 242, 14, 0.8), 0 5px 1px rgba(244, 45, 0, 0.8), -5px 0 1px rgba(59, 0, 226, 0.8);
  }
}

@keyframes type {
  0%, 19% {opacity: 0;}
  20%, 100% {opacity: 1;}
}

```

### Solution proposé

Création d'un fichier style.css pour centraliser les classes redontantes dans un seul fichier.

-----------------------------------------


# **Points Fort et Bonne pratique**

## **1 - Séparations des résponsabilités**

Pour faciliter les appels à l'API, j’ai décidé d’utiliser des services uniques pour chaque fonctionnalité :

   - characterService.ts

   - rankingService.ts

   - shipsService.ts

Chacun de ces services est responsable de centraliser les requêtes liées à sa ressource spécifique. J’ai choisi cette approche afin d’assurer une séparation claire des responsabilités, ce qui favorise une meilleure organisation du code et une facilité de maintenance.

Cette structure permet également une meilleure évolutivité, puisque chaque service peut être modifié ou étendu sans impacter les autres. De plus, côté test unitaire, cela me permettra de facilité grandement l'écriture de mes tests et me permetra en plus d'effectuer des tests plus spécifique pour chacune de mes ressources.

## **2 - Appels d'API**

Pour maximiser les performances de mon application, j'essaye d'effectuer le moins d'appel à l'API possible.

Par exemple, dans le composant battle.vue, un seul appel à l’API est effectué au lancement d’une partie. Cet appel permet de récupérer une liste de 5 ennemis aléatoires, qui sont ensuite utilisés tout au long du combat.
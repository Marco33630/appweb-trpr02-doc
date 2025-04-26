# **Troisième revue de code**

## **Points à compléter**

### 1- Fonctionnalités manquantes

Un modal de confirmation avant de quitter la bataille.

Actuellement, un joueur peut quitter la bataille sans être averti ni confirmer son choix. Il est important d’ajouter un modal de confirmation afin d’éviter toute perte de progression accidentelle. Cette fonctionnalité améliorerait à la fois l’expérience utilisateur et la robustesse du flux de jeu.

### 2- Tests unitaires manquants

La couverture de test est globalement bien avancée, mais certains aspects restent à compléter :

- Tests de validation du formulaire de création de     
  personnages, afin de garantir que les contraintes d'entrée sont correctement gérées sans recourir à des alertes.

- Tests complémentaires pour la logique de bataille.     
  Certaines fonctions ne sont toujours pas testées.


## **Points forts et améliorations depuis la dernière revue de code**

### Refactorisation de la logique de bataille
Le fichier Battle.vue a été restructuré pour améliorer sa lisibilité. La logique de bataille est désormais complète et testée en partie. 

Des composants ont été créer pour séparer la logique.

```md
src/
│
├── components/
│   ├── BattleSection.vue         
│   ├── CharacterCreationForm.vue          
│   ├── CharacterInfo.vue          
│   ├── DefeatModal.vue        
│   ├── EnemyInfo.vue
│   ├── HeroSection.vue 
│   ├── Navbar.vue
│   ├── RepairModal.vue         
│  
│  ...
│  
├── views/ 
│   ├──Battle.vue
│   ├──CreateCharacter.vue
│   ├──Home.vue
│   ├──LeaderBoard.vue

```

### Centralisation du style
Un fichier CSS global a été crée pour regrouper les styles communs de l’application. Cela permet de ne pas créer trop de redondance au niveau du style de l'application.

### Rédaction de la majorité des tests unitaires
Une bonne couverture de test a été crée sur l’ensemble de l’application pour le moment. Cependant, comme mentionné plus tôt, il manque toujours quelques tests à rédiger.
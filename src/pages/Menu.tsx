import React from "react";
import {
  IonContent,
  IonPage,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonMenuButton,
  IonButtons,
  IonLabel,
  IonRouterLink,
} from "@ionic/react";

const Menu: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonRouterLink routerLink="/home">
              <IonItem>
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink routerLink="/settings">
              <IonItem>
                <IonLabel>Settings</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink routerLink="/profile">
              <IonItem>
                <IonLabel>Profile</IonLabel>
              </IonItem>
            </IonRouterLink>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </>
  );
};

export default Menu;

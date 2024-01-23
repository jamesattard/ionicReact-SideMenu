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
  IonMenuToggle,
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
            <IonMenuToggle>
              <IonRouterLink routerLink="/home">
                <IonItem>
                  <IonLabel>Home</IonLabel>
                </IonItem>
              </IonRouterLink>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonRouterLink routerLink="/settings">
                <IonItem>
                  <IonLabel>Settings</IonLabel>
                </IonItem>
              </IonRouterLink>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonRouterLink routerLink="/profile">
                <IonItem>
                  <IonLabel>Profile</IonLabel>
                </IonItem>
              </IonRouterLink>
            </IonMenuToggle>
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

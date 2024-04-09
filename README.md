# Homework-System
System zarządzania zadaniami domowymi - Projekt na studia - Wzorzec MVC\
Tomasz Turek\
08.04.2024r.\
v.1.0

# Tytuł: System zarządzania zadaniami domowymi


# Opis projektu i funkcjonalności

## Opis ogólny

Aplikacja jest przeglądarkowa. Służy ona do zarządzania zadaniami użytkownika. Pozwala ona na wyświetlanie zapisanych zadań, dodawanie nowych, edycję i usuwanie zapisanych zadań.\
Wszystkie okienka mają nawigację do widoku głównego, do podglądu zapisanych zadań i do dodwania nowych.

## Funcjonalności, opis po okienkach

### Okienko główne

Główne okno krótko wyjaśnia do czego służy aplikacja oraz zachęca do skorzystania z nawigacji.

### Okienko dodawania zadania

Okno, które pobiera dane o nowym zadaniu od użytkownika.\
Zadanie ma formę:

> Tytuł zadania\
> Opis zadania\
> Data wykonania zadania\
> Informacja o wykonaniu zadania

Z powyższych wyłącznie tytył jest wymagany.

### Okienko listy

Okienko pobiera z pliku zapisane zadania i wyświetla ich treść na ekranie.\
Pojawia się tutaj również ID zadania, zatem mimo wprowadzenia identycznych zadań użytkownik może je rozróżniać.

Ponadto z tego okienka użytkownik może zadecydować o edycji i/lub usunięciu zadań.
<!--TODO TO DELETE Jak może edytować, usuwać zadania?!?!-->
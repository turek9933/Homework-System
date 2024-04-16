# Homework-System
System zarządzania zadaniami domowymi - Projekt na studia - Wzorzec MVC\
Tomasz Turek\
08.04.2024r.\
v.1.0

# Tytuł: System zarządzania zadaniami domowymi

## Spis treści

1. [Opis projektu i funkcjonalności](#opis-projektu-i-funkcjonalności)
    1. [Opis ogólny](#opis-ogólny)
    2. [Funkcjonalności](#funcjonalności)

# Opis projektu i funkcjonalności

## Opis ogólny

Aplikacja jest przeglądarkowa. Służy ona do zarządzania zadaniami użytkownika. Pozwala ona na wyświetlanie zapisanych zadań, dodawanie nowych zadań, edycję i usuwanie zapisanych zadań, a także zaznaczanie oraz odznaczanie wykonania zadania.\
Wszystkie okienka mają nawigację do widoku głównego, do podglądu zapisanych zadań i do dodwania nowych zadań.

## Funcjonalności

## Wyświetlanie zadań i manipulacja istniejącymi

Aplikacja pozwala na wyświetlanie dodanych już zadań w dwóch kolumnach.\
Pośród pól zadania jest:
- tytuł;
- opis;
- data;
- status.

Dla istniejących, wyświetlanych zadań można wykonać następujące czynności: zaznaczyć/odznaczyć wykonanie zadania, dokonać edycji treści zadania, usunąć jedno lub wszystkie zadania.

## Dodawanie zadań

Aplikacja pozwala na dopisywanie do bazy kolejnych zadań z formularza dostępnego dla użytkownika.\
Spośród pól zadań wyłącznie tytył jest wymagany.

### Okienko listy

Okienko pobiera z pliku zapisane zadania i wyświetla ich treść na ekranie.\
Pojawia się tutaj również ID zadania, zatem mimo wprowadzenia identycznych zadań użytkownik może je rozróżniać.

Ponadto z tego okienka użytkownik może zadecydować o edycji i/lub usunięciu zadań.
<!--TODO TO DELETE Jak może edytować, usuwać zadania?!?!-->
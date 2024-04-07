# Zasady ogólne

Celem projektu zaliczeniowego, jest zweryfikowanie umiejętności praktycznych studentów oraz sprawdzenie osiągniętych przez nich kompetencji w celu realizacji pełnoprawnej aplikacji w Node.JS z uwzględnieniem SSR (server-side rendering) oraz wzorca architektonicznego MVC.
Projekt zaliczeniowy oddawany jest w formie repozytorium na platformie github.

Repozytorium powinno zawierać plik README.md a w nim:
- tytuł i nazwa wybranego projektu, np. Książka adresowa,
- spis treści,
- listę i krótki opis zaimplementowanych w projekcie funkcjonalności,
- instrukcje obsługi (czyli jak uruchomić aplikację, czy potrzebne jest pobranie dodatkowych paczek a jeżeli tak, to jakich i w jaki sposób je zainstalować, itp.).

Dodatkowo w repozytorium musi się znaleźć:
- kod źródłowy aplikacji,
- plik z przykładowymi danymi wejściowymi (jeżeli projekt go wymaga i wykorzystuje).

Na ocenę za projekt składa się:
- wykonanie dokumentacji oraz opisu w pliku README.md,
- pokrycie z wymienionymi w zadaniu funkcjonalnościami,
- wykorzystanie bibliotek zewnętrznych,
- poprawność implementacji widoków,
- poprawność wykorzystanie wzorca architektonicznego MVC.

W przypadku, gdy aplikacja i/lub repozytorium nie będą kompletne lub nie spełnią wszystkich wymagań, ocena końcowa projektu zostanie adekwatnie obniżona.

# Zadanie – System zarządzania zadaniami domowymi
Projekt polega na utworzeniu aplikacji, która umożliwi użytkownikom zarządzanie swoimi zadaniami domowymi i terminami ich wykonania.\
Użytkownicy mogą dodawać nowe zadania, oznaczać je jako ukończone oraz edytować ich szczegóły.

Struktura projektu MVC:
- Model (models): definicja modelu zadania domowego (np. opis, termin wykonania, status),
- Kontroler (controllers): obsługa żądań http, interakcja z modelem i przekazywanie danych do widoku,
- Widok: (views): widok listy zadań domowych, formularz dodawania nowego zadania, formularz edycji informacji o zadaniu.


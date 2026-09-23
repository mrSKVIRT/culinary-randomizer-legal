const LANGS = ['ru', 'en', 'uk', 'es', 'de', 'fr', 'it'];
const LANG_NAMES = {
  ru: 'Русский',
  en: 'English',
  uk: 'Українська',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
};

function tr(obj, lang) {
  return obj[lang] || obj.en || obj.ru || '';
}

const PRIVACY_DOC = {
  icon: '🔒',
  title: {
    ru: 'Политика конфиденциальности',
    en: 'Privacy Policy',
    uk: 'Політика конфіденційності',
    es: 'Política de privacidad',
    de: 'Datenschutzerklärung',
    fr: 'Politique de confidentialité',
    it: 'Informativa sulla privacy',
  },
  sections: [
    {
      title: { ru: '1. Общие положения', en: '1. General information', uk: '1. Загальні положення', es: '1. Disposiciones generales', de: '1. Allgemeine Bestimmungen', fr: '1. Dispositions générales', it: '1. Disposizioni generali' },
      blocks: [
        { type: 'p', text: {
          ru: `Culinary Randomizer уважительно относится к конфиденциальности пользователей. Приложение предназначено для генерации кулинарных идей, ведения личных баз ингредиентов и хранения пользовательских рецептов.`,
          en: `Culinary Randomizer respects user privacy. The app is designed for generating culinary ideas, managing personal ingredient databases and storing user recipes.`,
          uk: `Culinary Randomizer поважає конфіденційність користувачів. Застосунок призначений для генерації кулінарних ідей, ведення особистих баз інгредієнтів та зберігання користувацьких рецептів.`,
          es: `Culinary Randomizer respeta la privacidad de los usuarios. La app está diseñada para generar ideas culinarias, gestionar bases de ingredientes personales y guardar recetas del usuario.`,
          de: `Culinary Randomizer respektiert die Privatsphäre der Nutzer. Die App dient der Generierung kulinarischer Ideen, der Verwaltung persönlicher Zutatendatenbanken und der Speicherung von Nutzerrezepten.`,
          fr: `Culinary Randomizer respecte la confidentialité des utilisateurs. L'application est conçue pour générer des idées culinaires, gérer des bases d'ingrédients personnelles et enregistrer les recettes des utilisateurs.`,
          it: `Culinary Randomizer rispetta la privacy degli utenti. L'app è pensata per generare idee culinarie, gestire basi di ingredienti personali e salvare le ricette dell'utente.`,
        }},
        { type: 'p', text: {
          ru: `Настоящая политика объясняет, какие данные используются приложением и как они хранятся.`,
          en: `This policy explains what data is used by the app and how it is stored.`,
          uk: `Ця політика пояснює, які дані використовує застосунок і як вони зберігаються.`,
          es: `Esta política explica qué datos utiliza la app y cómo se almacenan.`,
          de: `Diese Richtlinie erklärt, welche Daten die App verwendet und wie sie gespeichert werden.`,
          fr: `Cette politique explique quelles données sont utilisées par l'application et comment elles sont stockées.`,
          it: `Questa informativa spiega quali dati vengono utilizzati dall'app e come vengono conservati.`,
        }},
      ],
    },
    {
      title: { ru: '2. Оплата', en: '2. Payment', uk: '2. Оплата', es: '2. Pago', de: '2. Zahlung', fr: '2. Paiement', it: '2. Pagamento' },
      blocks: [
        { type: 'p', text: {
          ru: `Culinary Randomizer является платным приложением. Оплата и обработка платежей осуществляются через официальные платформы Google Play и App Store. Разработчик не получает, не хранит и не имеет доступа к данным банковской карты или иным платёжным реквизитам пользователя — вся платёжная информация обрабатывается исключительно Google и Apple в соответствии с их собственными политиками конфиденциальности.`,
          en: `Culinary Randomizer is a paid application. Payments are processed through the official Google Play and App Store platforms. The developer does not receive, store, or have access to your card details or other payment information — all payment data is handled exclusively by Google and Apple in accordance with their own privacy policies.`,
          uk: `Culinary Randomizer є платним застосунком. Оплата та обробка платежів здійснюються через офіційні платформи Google Play та App Store. Розробник не отримує, не зберігає і не має доступу до даних банківської картки чи інших платіжних реквізитів користувача — вся платіжна інформація обробляється виключно Google та Apple відповідно до їхніх власних політик конфіденційності.`,
          es: `Culinary Randomizer es una aplicación de pago. Los pagos se procesan a través de las plataformas oficiales de Google Play y App Store. El desarrollador no recibe, almacena ni tiene acceso a los datos de tu tarjeta ni a otra información de pago: todos los datos de pago son gestionados exclusivamente por Google y Apple conforme a sus propias políticas de privacidad.`,
          de: `Culinary Randomizer ist eine kostenpflichtige App. Zahlungen werden über die offiziellen Plattformen Google Play und App Store abgewickelt. Der Entwickler erhält, speichert oder hat keinen Zugriff auf deine Kartendaten oder andere Zahlungsinformationen — alle Zahlungsdaten werden ausschließlich von Google und Apple gemäß deren eigenen Datenschutzrichtlinien verarbeitet.`,
          fr: `Culinary Randomizer est une application payante. Les paiements sont traités via les plateformes officielles Google Play et App Store. Le développeur ne reçoit, ne stocke ni n'a accès aux données de votre carte ou à d'autres informations de paiement — toutes les données de paiement sont traitées exclusivement par Google et Apple conformément à leurs propres politiques de confidentialité.`,
          it: `Culinary Randomizer è un'app a pagamento. I pagamenti vengono elaborati tramite le piattaforme ufficiali Google Play e App Store. Lo sviluppatore non riceve, non memorizza e non ha accesso ai dati della tua carta o ad altre informazioni di pagamento: tutti i dati di pagamento vengono gestiti esclusivamente da Google e Apple in conformità con le rispettive politiche sulla privacy.`,
        }},
      ],
    },
    {
      title: { ru: '3. Какие данные использует приложение', en: '3. What data the app uses', uk: '3. Які дані використовує застосунок', es: '3. Qué datos utiliza la app', de: '3. Welche Daten die App verwendet', fr: '3. Quelles données l’application utilise', it: '3. Quali dati utilizza l’app' },
      blocks: [
        { type: 'p', text: {
          ru: `Приложение может хранить на устройстве пользователя следующие данные:`,
          en: `The app may store the following data on the user's device:`,
          uk: `Застосунок може зберігати на пристрої користувача такі дані:`,
          es: `La app puede almacenar en el dispositivo del usuario los siguientes datos:`,
          de: `Die App kann folgende Daten auf dem Gerät des Nutzers speichern:`,
          fr: `L'application peut stocker les données suivantes sur l'appareil de l'utilisateur :`,
          it: `L'app può memorizzare sul dispositivo dell'utente i seguenti dati:`,
        }},
        { type: 'ul', items: [
          { ru: `созданные пользователем рецепты;`, en: `recipes created by the user;`, uk: `рецепти, створені користувачем;`, es: `recetas creadas por el usuario;`, de: `vom Nutzer erstellte Rezepte;`, fr: `recettes créées par l'utilisateur ;`, it: `ricette create dall'utente;` },
          { ru: `списки ингредиентов и этапы приготовления;`, en: `ingredient lists and cooking steps;`, uk: `списки інгредієнтів та етапи приготування;`, es: `listas de ingredientes y pasos de preparación;`, de: `Zutatenlisten und Zubereitungsschritte;`, fr: `listes d'ingrédients et étapes de préparation ;`, it: `elenchi di ingredienti e fasi di preparazione;` },
          { ru: `пользовательские базы ингредиентов;`, en: `personal ingredient databases;`, uk: `користувацькі бази інгредієнтів;`, es: `bases de ingredientes personales;`, de: `benutzerdefinierte Zutatendatenbanken;`, fr: `bases d'ingrédients personnelles ;`, it: `basi di ingredienti personali;` },
          { ru: `историю запусков рандомайзера;`, en: `randomizer history;`, uk: `історію запусків рандомайзера;`, es: `historial de ejecuciones del aleatorizador;`, de: `Verlauf der Randomizer-Läufe;`, fr: `historique des lancements du randomiseur ;`, it: `cronologia degli avvii del randomizzatore;` },
          { ru: `настройки приложения, включая выбранный язык интерфейса.`, en: `app settings, including the selected interface language.`, uk: `налаштування застосунку, включно з вибраною мовою інтерфейсу.`, es: `ajustes de la app, incluido el idioma de la interfaz seleccionado.`, de: `App-Einstellungen, einschließlich der gewählten Oberflächensprache.`, fr: `paramètres de l'application, y compris la langue de l'interface sélectionnée.`, it: `impostazioni dell'app, inclusa la lingua dell'interfaccia selezionata.` },
        ]},
      ],
    },
    {
      title: { ru: '4. Фотографии и изображения', en: '4. Photos and images', uk: '4. Фотографії та зображення', es: '4. Fotos e imágenes', de: '4. Fotos und Bilder', fr: '4. Photos et images', it: '4. Foto e immagini' },
      blocks: [
        { type: 'p', text: {
          ru: `Приложение содержит встроенные изображения ингредиентов и категорий. Также пользователь может самостоятельно добавлять изображения к личным ингредиентам, рецептам и этапам приготовления.`,
          en: `The app includes built-in images of ingredients and categories. The user may also add images to personal ingredients, recipes and cooking steps.`,
          uk: `Застосунок містить вбудовані зображення інгредієнтів та категорій. Також користувач може самостійно додавати зображення до особистих інгредієнтів, рецептів та етапів приготування.`,
          es: `La app incluye imágenes integradas de ingredientes y categorías. El usuario también puede añadir imágenes a ingredientes personales, recetas y pasos de preparación.`,
          de: `Die App enthält integrierte Bilder von Zutaten und Kategorien. Der Nutzer kann außerdem Bilder zu persönlichen Zutaten, Rezepten und Zubereitungsschritten hinzufügen.`,
          fr: `L'application contient des images intégrées d'ingrédients et de catégories. L'utilisateur peut également ajouter des images à ses ingrédients, recettes et étapes de préparation personnels.`,
          it: `L'app include immagini integrate di ingredienti e categorie. L'utente può inoltre aggiungere immagini a ingredienti, ricette e fasi di preparazione personali.`,
        }},
        { type: 'p', text: {
          ru: `Добавленные пользователем изображения используются только внутри приложения и хранятся локально на устройстве пользователя.`,
          en: `Images added by the user are used only inside the app and are stored locally on the user's device.`,
          uk: `Зображення, додані користувачем, використовуються лише всередині застосунку та зберігаються локально на пристрої користувача.`,
          es: `Las imágenes añadidas por el usuario se usan solo dentro de la app y se almacenan localmente en su dispositivo.`,
          de: `Vom Nutzer hinzugefügte Bilder werden nur innerhalb der App verwendet und lokal auf dem Gerät des Nutzers gespeichert.`,
          fr: `Les images ajoutées par l'utilisateur sont utilisées uniquement au sein de l'application et stockées localement sur son appareil.`,
          it: `Le immagini aggiunte dall'utente vengono utilizzate solo all'interno dell'app e memorizzate localmente sul dispositivo dell'utente.`,
        }},
      ],
    },
    {
      title: { ru: '5. Локальное хранение данных', en: '5. Local data storage', uk: '5. Локальне зберігання даних', es: '5. Almacenamiento local de datos', de: '5. Lokale Datenspeicherung', fr: '5. Stockage local des données', it: '5. Archiviazione locale dei dati' },
      blocks: [
        { type: 'p', text: {
          ru: `Все пользовательские рецепты, базы ингредиентов, фотографии и настройки сохраняются локально на устройстве пользователя.`,
          en: `All user recipes, ingredient databases, photos and settings are stored locally on the user's device.`,
          uk: `Усі користувацькі рецепти, бази інгредієнтів, фотографії та налаштування зберігаються локально на пристрої користувача.`,
          es: `Todas las recetas, bases de ingredientes, fotos y ajustes del usuario se almacenan localmente en su dispositivo.`,
          de: `Alle Nutzerrezepte, Zutatendatenbanken, Fotos und Einstellungen werden lokal auf dem Gerät des Nutzers gespeichert.`,
          fr: `Toutes les recettes, bases d'ingrédients, photos et paramètres de l'utilisateur sont stockés localement sur son appareil.`,
          it: `Tutte le ricette, le basi di ingredienti, le foto e le impostazioni dell'utente vengono memorizzate localmente sul dispositivo dell'utente.`,
        }},
        { type: 'p', text: {
          ru: `Приложение не использует собственный сервер, не выполняет облачную синхронизацию и не передает пользовательские рецепты или фотографии разработчику.`,
          en: `The app does not use its own server, does not perform cloud synchronization and does not send user recipes or photos to the developer.`,
          uk: `Застосунок не використовує власний сервер, не виконує хмарну синхронізацію та не передає користувацькі рецепти або фотографії розробнику.`,
          es: `La app no utiliza servidor propio, no realiza sincronización en la nube y no envía recetas ni fotos del usuario al desarrollador.`,
          de: `Die App verwendet keinen eigenen Server, führt keine Cloud-Synchronisierung durch und sendet keine Nutzerrezepte oder -fotos an den Entwickler.`,
          fr: `L'application n'utilise pas de serveur propre, n'effectue pas de synchronisation cloud et n'envoie pas les recettes ou photos de l'utilisateur au développeur.`,
          it: `L'app non utilizza un proprio server, non esegue sincronizzazione cloud e non invia ricette o foto dell'utente allo sviluppatore.`,
        }},
        { type: 'p', text: {
          ru: `При удалении приложения с устройства все локально сохранённые данные (рецепты, базы ингредиентов, фотографии, история и настройки) удаляются безвозвратно.`,
          en: `When the app is uninstalled from the device, all locally stored data (recipes, ingredient databases, photos, history and settings) is permanently deleted.`,
          uk: `Під час видалення застосунку з пристрою всі локально збережені дані (рецепти, бази інгредієнтів, фотографії, історія та налаштування) видаляються безповоротно.`,
          es: `Al desinstalar la aplicación del dispositivo, todos los datos almacenados localmente (recetas, bases de ingredientes, fotos, historial y ajustes) se eliminan de forma permanente.`,
          de: `Beim Deinstallieren der App vom Gerät werden alle lokal gespeicherten Daten (Rezepte, Zutatendatenbanken, Fotos, Verlauf und Einstellungen) dauerhaft gelöscht.`,
          fr: `Lors de la désinstallation de l'application, toutes les données stockées localement (recettes, bases d'ingrédients, photos, historique et paramètres) sont supprimées définitivement.`,
          it: `Quando l'app viene disinstallata dal dispositivo, tutti i dati memorizzati localmente (ricette, basi di ingredienti, foto, cronologia e impostazioni) vengono eliminati definitivamente.`,
        }},
      ],
    },
    {
      title: { ru: '6. Передача данных третьим лицам', en: '6. Data sharing with third parties', uk: '6. Передача даних третім особам', es: '6. Compartir datos con terceros', de: '6. Weitergabe von Daten an Dritte', fr: '6. Partage de données avec des tiers', it: '6. Condivisione dei dati con terzi' },
      blocks: [
        { type: 'p', text: {
          ru: `Culinary Randomizer не продает, не передает и не раскрывает пользовательские данные третьим лицам.`,
          en: `Culinary Randomizer does not sell, transfer or disclose user data to third parties.`,
          uk: `Culinary Randomizer не продає, не передає та не розкриває користувацькі дані третім особам.`,
          es: `Culinary Randomizer no vende, transfiere ni divulga datos de usuario a terceros.`,
          de: `Culinary Randomizer verkauft, überträgt oder offenbart keine Nutzerdaten an Dritte.`,
          fr: `Culinary Randomizer ne vend, ne transfère ni ne divulgue les données des utilisateurs à des tiers.`,
          it: `Culinary Randomizer non vende, trasferisce o divulga i dati degli utenti a terzi.`,
        }},
        { type: 'p', text: {
          ru: `Приложение не использует рекламные сети, встроенную аналитику или сторонние системы отслеживания пользователей.`,
          en: `The app does not use advertising networks, built-in analytics or third-party user tracking systems.`,
          uk: `Застосунок не використовує рекламні мережі, вбудовану аналітику або сторонні системи відстеження користувачів.`,
          es: `La app no utiliza redes publicitarias, análisis integrado ni sistemas de seguimiento de terceros.`,
          de: `Die App verwendet keine Werbenetzwerke, keine integrierte Analyse und keine Tracking-Systeme von Drittanbietern.`,
          fr: `L'application n'utilise pas de réseaux publicitaires, d'analyses intégrées ni de systèmes de suivi tiers.`,
          it: `L'app non utilizza reti pubblicitarie, analisi integrate o sistemi di tracciamento di terze parti.`,
        }},
      ],
    },
    {
      title: { ru: '7. Разрешения устройства', en: '7. Device permissions', uk: '7. Дозволи пристрою', es: '7. Permisos del dispositivo', de: '7. Geräteberechtigungen', fr: '7. Autorisations de l’appareil', it: '7. Autorizzazioni del dispositivo' },
      blocks: [
        { type: 'p', text: {
          ru: `Приложение может запрашивать доступ к изображениям или файлам устройства только для того, чтобы пользователь мог выбрать фотографию для ингредиента, рецепта или этапа приготовления.`,
          en: `The app may request access to device images or files only so the user can select a photo for an ingredient, recipe or cooking step.`,
          uk: `Застосунок може запитувати доступ до зображень або файлів пристрою лише для того, щоб користувач міг вибрати фотографію для інгредієнта, рецепта або етапу приготування.`,
          es: `La app puede solicitar acceso a las imágenes o archivos del dispositivo únicamente para que el usuario pueda elegir una foto para un ingrediente, receta o paso de preparación.`,
          de: `Die App kann Zugriff auf Bilder oder Dateien des Geräts anfordern, nur damit der Nutzer ein Foto für eine Zutat, ein Rezept oder einen Zubereitungsschritt auswählen kann.`,
          fr: `L'application peut demander l'accès aux images ou fichiers de l'appareil uniquement pour permettre à l'utilisateur de choisir une photo pour un ingrédient, une recette ou une étape de préparation.`,
          it: `L'app può richiedere l'accesso a immagini o file del dispositivo solo per consentire all'utente di scegliere una foto per un ingrediente, una ricetta o una fase di preparazione.`,
        }},
        { type: 'p', text: {
          ru: `Доступ к выбранным изображениям используется только для работы функций приложения.`,
          en: `Access to selected images is used only for app functionality.`,
          uk: `Доступ до вибраних зображень використовується лише для роботи функцій застосунку.`,
          es: `El acceso a las imágenes seleccionadas se utiliza únicamente para el funcionamiento de la app.`,
          de: `Der Zugriff auf ausgewählte Bilder wird ausschließlich für die Funktionalität der App verwendet.`,
          fr: `L'accès aux images sélectionnées est utilisé uniquement pour le fonctionnement de l'application.`,
          it: `L'accesso alle immagini selezionate viene utilizzato solo per il funzionamento dell'app.`,
        }},
      ],
    },
    {
      title: { ru: '8. Дети', en: '8. Children', uk: '8. Діти', es: '8. Menores', de: '8. Kinder', fr: '8. Enfants', it: '8. Minori' },
      blocks: [
        { type: 'p', text: {
          ru: `Приложение не предназначено для детей младше 13 лет и не собирает персональные данные детей младше этого возраста.`,
          en: `The app is not intended for children under the age of 13 and does not knowingly collect personal data from children under this age.`,
          uk: `Застосунок не призначений для дітей віком до 13 років і не збирає персональні дані дітей молодше цього віку.`,
          es: `La aplicación no está destinada a menores de 13 años y no recopila conscientemente datos personales de menores de esa edad.`,
          de: `Die App ist nicht für Kinder unter 13 Jahren bestimmt und sammelt wissentlich keine personenbezogenen Daten von Kindern unter diesem Alter.`,
          fr: `L'application n'est pas destinée aux enfants de moins de 13 ans et ne collecte pas sciemment de données personnelles auprès d'enfants de moins de cet âge.`,
          it: `L'app non è destinata a bambini di età inferiore ai 13 anni e non raccoglie consapevolmente dati personali da bambini di età inferiore a tale soglia.`,
        }},
      ],
    },
    {
      title: { ru: '9. Изменения политики', en: '9. Changes to this policy', uk: '9. Зміни політики', es: '9. Cambios en esta política', de: '9. Änderungen dieser Richtlinie', fr: '9. Modifications de cette politique', it: '9. Modifiche a questa informativa' },
      blocks: [
        { type: 'p', text: {
          ru: `Политика конфиденциальности может обновляться при изменении функций приложения. Актуальная версия политики доступна внутри приложения и на странице приложения в магазине.`,
          en: `This Privacy Policy may be updated when app features change. The current version is available inside the app and on the app store page.`,
          uk: `Політика конфіденційності може оновлюватися при зміні функцій застосунку. Актуальна версія політики доступна всередині застосунку та на сторінці застосунку в магазині.`,
          es: `Esta política de privacidad puede actualizarse cuando cambien las funciones de la app. La versión vigente está disponible dentro de la app y en la página de la tienda de aplicaciones.`,
          de: `Diese Datenschutzerklärung kann bei Änderungen der App-Funktionen aktualisiert werden. Die aktuelle Version ist in der App und auf der Store-Seite der App verfügbar.`,
          fr: `Cette politique de confidentialité peut être mise à jour lors de modifications des fonctionnalités de l'application. La version actuelle est disponible dans l'application et sur sa page dans la boutique d'applications.`,
          it: `Questa informativa sulla privacy può essere aggiornata in caso di modifiche alle funzionalità dell'app. La versione attuale è disponibile all'interno dell'app e nella pagina dell'app sullo store.`,
        }},
      ],
    },
    {
      title: { ru: '10. Контакты', en: '10. Contact', uk: '10. Контакти', es: '10. Contacto', de: '10. Kontakt', fr: '10. Contact', it: '10. Contatti' },
      blocks: [
        { type: 'p', text: {
          ru: `По вопросам, связанным с конфиденциальностью приложения, можно связаться с разработчиком по адресу: culinaryrandomizer.dev@gmail.com`,
          en: `For questions related to app privacy, you can contact the developer at: culinaryrandomizer.dev@gmail.com`,
          uk: `З питань, пов'язаних із конфіденційністю застосунку, можна зв'язатися з розробником за адресою: culinaryrandomizer.dev@gmail.com`,
          es: `Para preguntas relacionadas con la privacidad de la app, puedes contactar al desarrollador en: culinaryrandomizer.dev@gmail.com`,
          de: `Bei Fragen zum Datenschutz der App kannst du den Entwickler kontaktieren unter: culinaryrandomizer.dev@gmail.com`,
          fr: `Pour toute question relative à la confidentialité de l'application, vous pouvez contacter le développeur à : culinaryrandomizer.dev@gmail.com`,
          it: `Per domande relative alla privacy dell'app, puoi contattare lo sviluppatore all'indirizzo: culinaryrandomizer.dev@gmail.com`,
        }},
      ],
    },
  ],
};

const TERMS_DOC = {
  icon: '📄',
  title: {
    ru: 'Пользовательское соглашение',
    en: 'Terms of Service',
    uk: 'Угода користувача',
    es: 'Términos de servicio',
    de: 'Nutzungsbedingungen',
    fr: "Conditions d'utilisation",
    it: 'Termini di servizio',
  },
  sections: [
    {
      title: { ru: '1. Общие положения', en: '1. General Provisions', uk: '1. Загальні положення', es: '1. Disposiciones generales', de: '1. Allgemeine Bestimmungen', fr: '1. Dispositions générales', it: '1. Disposizioni generali' },
      blocks: [
        { type: 'p', text: {
          ru: `Используя приложение Culinary Randomizer (далее — «Приложение»), вы соглашаетесь с условиями настоящего Пользовательского соглашения. Если вы не согласны с данными условиями, пожалуйста, не используйте Приложение.`,
          en: `By using the Culinary Randomizer application (the "App"), you agree to the terms of this User Agreement. If you do not agree to these terms, please do not use the App.`,
          uk: `Використовуючи застосунок Culinary Randomizer (далі — «Застосунок»), ви погоджуєтеся з умовами цієї Угоди користувача. Якщо ви не погоджуєтеся з цими умовами, будь ласка, не використовуйте Застосунок.`,
          es: `Al utilizar la aplicación Culinary Randomizer (la «App»), aceptas los términos de este Acuerdo de Usuario. Si no estás de acuerdo con estos términos, no utilices la App.`,
          de: `Durch die Nutzung der App Culinary Randomizer (die „App") stimmst du den Bedingungen dieser Nutzungsvereinbarung zu. Wenn du diesen Bedingungen nicht zustimmst, nutze die App bitte nicht.`,
          fr: `En utilisant l'application Culinary Randomizer (l'« Application »), vous acceptez les conditions du présent Contrat d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'Application.`,
          it: `Utilizzando l'app Culinary Randomizer (l'«App»), accetti i termini del presente Accordo per l'utente. Se non accetti questi termini, non utilizzare l'App.`,
        }},
        { type: 'p', text: {
          ru: `Разработчиком Приложения является Тарас Шевченко (далее — «Разработчик»).`,
          en: `The developer of the App is Taras Shevchenko (the "Developer").`,
          uk: `Розробником Застосунку є Тарас Шевченко (далі — «Розробник»).`,
          es: `El desarrollador de la App es Taras Shevchenko (el «Desarrollador»).`,
          de: `Entwickler der App ist Taras Shevchenko (der „Entwickler").`,
          fr: `Le développeur de l'Application est Taras Shevchenko (le « Développeur »).`,
          it: `Lo sviluppatore dell'App è Taras Shevchenko (lo «Sviluppatore»).`,
        }},
      ],
    },
    {
      title: { ru: '2. Предмет соглашения', en: '2. Subject of the Agreement', uk: '2. Предмет угоди', es: '2. Objeto del acuerdo', de: '2. Gegenstand der Vereinbarung', fr: '2. Objet du contrat', it: "2. Oggetto dell'accordo" },
      blocks: [
        { type: 'p', text: {
          ru: `Разработчик предоставляет вам ограниченную, неисключительную, непередаваемую лицензию на использование Приложения на вашем личном устройстве в личных, некоммерческих целях.`,
          en: `The Developer grants you a limited, non-exclusive, non-transferable license to use the App on your personal device for personal, non-commercial purposes.`,
          uk: `Розробник надає вам обмежену, невиключну, непередавану ліцензію на використання Застосунку на вашому особистому пристрої в особистих, некомерційних цілях.`,
          es: `El Desarrollador te concede una licencia limitada, no exclusiva e intransferible para usar la App en tu dispositivo personal con fines personales y no comerciales.`,
          de: `Der Entwickler gewährt dir eine beschränkte, nicht ausschließliche, nicht übertragbare Lizenz zur Nutzung der App auf deinem persönlichen Gerät für persönliche, nicht kommerzielle Zwecke.`,
          fr: `Le Développeur vous accorde une licence limitée, non exclusive et incessible d'utilisation de l'Application sur votre appareil personnel à des fins personnelles et non commerciales.`,
          it: `Lo Sviluppatore ti concede una licenza limitata, non esclusiva e non trasferibile per utilizzare l'App sul tuo dispositivo personale per scopi personali e non commerciali.`,
        }},
        { type: 'p', text: {
          ru: `Приобретая доступ к Приложению, вы получаете право пользования, а не право собственности на Приложение, его код, дизайн или содержимое.`,
          en: `By accessing the App, you receive a right to use it, not ownership of the App, its code, design or content.`,
          uk: `Отримуючи доступ до Застосунку, ви отримуєте право користування, а не право власності на Застосунок, його код, дизайн чи вміст.`,
          es: `Al acceder a la App, obtienes un derecho de uso, no la propiedad de la App, su código, diseño o contenido.`,
          de: `Durch den Zugriff auf die App erhältst du ein Nutzungsrecht, nicht das Eigentum an der App, ihrem Code, Design oder Inhalt.`,
          fr: `En accédant à l'Application, vous obtenez un droit d'utilisation, et non la propriété de l'Application, de son code, de son design ou de son contenu.`,
          it: `Accedendo all'App, ottieni un diritto d'uso, non la proprietà dell'App, del suo codice, design o contenuto.`,
        }},
      ],
    },
    {
      title: { ru: '3. Права на приложение и его содержимое', en: '3. Rights to the App and Its Content', uk: "3. Права на застосунок та його вміст", es: '3. Derechos sobre la App y su contenido', de: '3. Rechte an der App und ihren Inhalten', fr: "3. Droits sur l'Application et son contenu", it: "3. Diritti sull'App e sui suoi contenuti" },
      blocks: [
        { type: 'p', text: {
          ru: `Приложение, включая его исходный код, дизайн, графику, тексты, общую базу ингредиентов, категории и всё встроенное содержимое, является объектом авторского права и принадлежит Разработчику.`,
          en: `The App, including its source code, design, graphics, texts, common ingredient database, categories and all built-in content, is protected by copyright and belongs to the Developer.`,
          uk: `Застосунок, включно з його вихідним кодом, дизайном, графікою, текстами, основною базою інгредієнтів, категоріями та всім вбудованим вмістом, є об'єктом авторського права і належить Розробнику.`,
          es: `La App, incluidos su código fuente, diseño, gráficos, textos, base común de ingredientes, categorías y todo el contenido integrado, está protegida por derechos de autor y pertenece al Desarrollador.`,
          de: `Die App, einschließlich ihres Quellcodes, Designs, der Grafiken, Texte, der allgemeinen Zutatendatenbank, Kategorien und aller integrierten Inhalte, ist urheberrechtlich geschützt und gehört dem Entwickler.`,
          fr: `L'Application, y compris son code source, son design, ses graphismes, ses textes, sa base d'ingrédients commune, ses catégories et tout son contenu intégré, est protégée par le droit d'auteur et appartient au Développeur.`,
          it: `L'App, compreso il suo codice sorgente, design, grafica, testi, base comune di ingredienti, categorie e tutti i contenuti integrati, è protetta da copyright e appartiene allo Sviluppatore.`,
        }},
        { type: 'p', text: {
          ru: `Запрещается:`, en: `It is prohibited to:`, uk: `Забороняється:`, es: `Queda prohibido:`, de: `Es ist untersagt:`, fr: `Il est interdit de :`, it: `È vietato:`,
        }},
        { type: 'ul', items: [
          { ru: `копировать, изменять, декомпилировать или пытаться получить исходный код Приложения;`, en: `copy, modify, decompile or attempt to obtain the App's source code;`, uk: `копіювати, змінювати, декомпілювати або намагатися отримати вихідний код Застосунку;`, es: `copiar, modificar, descompilar o intentar obtener el código fuente de la App;`, de: `den Quellcode der App zu kopieren, zu verändern, zu dekompilieren oder zu versuchen, ihn zu erhalten;`, fr: `copier, modifier, décompiler ou tenter d'obtenir le code source de l'Application ;`, it: `copiare, modificare, decompilare o tentare di ottenere il codice sorgente dell'App;` },
          { ru: `распространять, перепродавать, сдавать в аренду или передавать доступ к Приложению третьим лицам;`, en: `distribute, resell, rent out or transfer access to the App to third parties;`, uk: `поширювати, перепродавати, здавати в оренду або передавати доступ до Застосунку третім особам;`, es: `distribuir, revender, alquilar o transferir el acceso a la App a terceros;`, de: `die App zu verbreiten, weiterzuverkaufen, zu vermieten oder den Zugriff darauf an Dritte weiterzugeben;`, fr: `distribuer, revendre, louer ou transférer l'accès à l'Application à des tiers ;`, it: `distribuire, rivendere, noleggiare o trasferire l'accesso all'App a terzi;` },
          { ru: `использовать содержимое Приложения (тексты, изображения, базу ингредиентов) вне Приложения без письменного разрешения Разработчика.`, en: `use the App's content (texts, images, ingredient database) outside the App without the Developer's written permission.`, uk: `використовувати вміст Застосунку (тексти, зображення, базу інгредієнтів) поза межами Застосунку без письмового дозволу Розробника.`, es: `utilizar el contenido de la App (textos, imágenes, base de ingredientes) fuera de la App sin el permiso por escrito del Desarrollador.`, de: `Inhalte der App (Texte, Bilder, Zutatendatenbank) außerhalb der App ohne schriftliche Genehmigung des Entwicklers zu verwenden.`, fr: `utiliser le contenu de l'Application (textes, images, base d'ingrédients) en dehors de l'Application sans l'autorisation écrite du Développeur.`, it: `utilizzare i contenuti dell'App (testi, immagini, base di ingredienti) al di fuori dell'App senza l'autorizzazione scritta dello Sviluppatore.` },
        ]},
      ],
    },
    {
      title: { ru: '4. Пользовательский контент', en: '4. User Content', uk: '4. Користувацький контент', es: '4. Contenido del usuario', de: '4. Nutzerinhalte', fr: "4. Contenu de l'utilisateur", it: "4. Contenuti dell'utente" },
      blocks: [
        { type: 'p', text: {
          ru: `Пользователь самостоятельно создаёт и хранит внутри Приложения собственные рецепты, фотографии, описания и пользовательские базы ингредиентов (далее — «Пользовательский контент»).`,
          en: `The user independently creates and stores their own recipes, photos, descriptions and personal ingredient databases within the App (the "User Content").`,
          uk: `Користувач самостійно створює і зберігає всередині Застосунку власні рецепти, фотографії, описи та користувацькі бази інгредієнтів (далі — «Користувацький контент»).`,
          es: `El usuario crea y almacena de forma independiente sus propias recetas, fotos, descripciones y bases de ingredientes personales dentro de la App (el «Contenido del usuario»).`,
          de: `Der Nutzer erstellt und speichert eigenständig seine eigenen Rezepte, Fotos, Beschreibungen und persönlichen Zutatendatenbanken innerhalb der App (die „Nutzerinhalte").`,
          fr: `L'utilisateur crée et stocke lui-même ses propres recettes, photos, descriptions et bases d'ingrédients personnelles au sein de l'Application (le « Contenu utilisateur »).`,
          it: `L'utente crea e memorizza autonomamente le proprie ricette, foto, descrizioni e basi di ingredienti personali all'interno dell'App (i «Contenuti dell'utente»).`,
        }},
        { type: 'p', text: {
          ru: `Пользователь сохраняет все права на созданный им Пользовательский контент. Приложение хранит этот контент локально на устройстве пользователя и не передаёт его Разработчику.`,
          en: `The user retains all rights to the User Content they create. The App stores this content locally on the user's device and does not transmit it to the Developer.`,
          uk: `Користувач зберігає всі права на створений ним Користувацький контент. Застосунок зберігає цей контент локально на пристрої користувача і не передає його Розробнику.`,
          es: `El usuario conserva todos los derechos sobre el Contenido del usuario que crea. La App almacena este contenido localmente en el dispositivo del usuario y no lo transmite al Desarrollador.`,
          de: `Der Nutzer behält alle Rechte an den von ihm erstellten Nutzerinhalten. Die App speichert diese Inhalte lokal auf dem Gerät des Nutzers und übermittelt sie nicht an den Entwickler.`,
          fr: `L'utilisateur conserve tous les droits sur le Contenu utilisateur qu'il crée. L'Application stocke ce contenu localement sur l'appareil de l'utilisateur et ne le transmet pas au Développeur.`,
          it: `L'utente conserva tutti i diritti sui Contenuti dell'utente che crea. L'App memorizza questi contenuti localmente sul dispositivo dell'utente e non li trasmette allo Sviluppatore.`,
        }},
        { type: 'p', text: {
          ru: `Пользователь несёт полную ответственность за содержание своего Пользовательского контента.`,
          en: `The user is solely responsible for the content of their User Content.`,
          uk: `Користувач несе повну відповідальність за зміст свого Користувацького контенту.`,
          es: `El usuario es el único responsable del contenido de su Contenido del usuario.`,
          de: `Der Nutzer ist allein verantwortlich für den Inhalt seiner Nutzerinhalte.`,
          fr: `L'utilisateur est seul responsable du contenu de son Contenu utilisateur.`,
          it: `L'utente è l'unico responsabile del contenuto dei propri Contenuti dell'utente.`,
        }},
      ],
    },
    {
      title: { ru: '5. Отказ от ответственности за кулинарные результаты', en: '5. Disclaimer Regarding Culinary Results', uk: '5. Відмова від відповідальності за кулінарні результати', es: '5. Exención de responsabilidad sobre los resultados culinarios', de: '5. Haftungsausschluss für kulinarische Ergebnisse', fr: '5. Clause de non-responsabilité concernant les résultats culinaires', it: '5. Esclusione di responsabilità sui risultati culinari' },
      blocks: [
        { type: 'p', text: {
          ru: `Приложение предназначено для развлечения и кулинарного вдохновения. Случайно сгенерированные наборы ингредиентов и задания не являются профессиональной кулинарной или диетологической рекомендацией.`,
          en: `The App is intended for entertainment and culinary inspiration. Randomly generated sets of ingredients and challenges do not constitute professional culinary or dietary advice.`,
          uk: `Застосунок призначений для розваги та кулінарного натхнення. Випадково згенеровані набори інгредієнтів і завдання не є професійною кулінарною чи дієтологічною рекомендацією.`,
          es: `La App está destinada al entretenimiento y la inspiración culinaria. Los conjuntos de ingredientes y desafíos generados aleatoriamente no constituyen asesoramiento culinario o dietético profesional.`,
          de: `Die App dient der Unterhaltung und kulinarischen Inspiration. Zufällig generierte Zutatensets und Aufgaben stellen keine professionelle kulinarische oder ernährungswissenschaftliche Beratung dar.`,
          fr: `L'Application est destinée au divertissement et à l'inspiration culinaire. Les ensembles d'ingrédients et les défis générés aléatoirement ne constituent pas un conseil culinaire ou diététique professionnel.`,
          it: `L'App è destinata all'intrattenimento e all'ispirazione culinaria. I set di ingredienti e le sfide generati casualmente non costituiscono consulenza culinaria o dietetica professionale.`,
        }},
        { type: 'p', text: {
          ru: `Разработчик не несёт ответственности за качество, вкус, безопасность или пищевую ценность блюд, приготовленных на основе рекомендаций Приложения.`,
          en: `The Developer is not responsible for the quality, taste, safety or nutritional value of dishes prepared based on the App's suggestions.`,
          uk: `Розробник не несе відповідальності за якість, смак, безпеку чи харчову цінність страв, приготованих на основі рекомендацій Застосунку.`,
          es: `El Desarrollador no se hace responsable de la calidad, el sabor, la seguridad ni el valor nutricional de los platos preparados según las sugerencias de la App.`,
          de: `Der Entwickler übernimmt keine Verantwortung für die Qualität, den Geschmack, die Sicherheit oder den Nährwert von Gerichten, die auf Grundlage der Vorschläge der App zubereitet werden.`,
          fr: `Le Développeur n'est pas responsable de la qualité, du goût, de la sécurité ou de la valeur nutritionnelle des plats préparés sur la base des suggestions de l'Application.`,
          it: `Lo Sviluppatore non è responsabile della qualità, del gusto, della sicurezza o del valore nutrizionale dei piatti preparati sulla base dei suggerimenti dell'App.`,
        }},
        { type: 'p', text: {
          ru: `Пользователь самостоятельно несёт ответственность за проверку ингредиентов на наличие аллергенов, соблюдение правил пищевой безопасности и качество используемых продуктов.`,
          en: `The user is solely responsible for checking ingredients for allergens, following food safety rules and the quality of the products used.`,
          uk: `Користувач самостійно несе відповідальність за перевірку інгредієнтів на наявність алергенів, дотримання правил харчової безпеки та якість використовуваних продуктів.`,
          es: `El usuario es el único responsable de comprobar los alérgenos de los ingredientes, cumplir las normas de seguridad alimentaria y la calidad de los productos utilizados.`,
          de: `Der Nutzer ist allein dafür verantwortlich, Zutaten auf Allergene zu prüfen, Lebensmittelsicherheitsregeln einzuhalten und die Qualität der verwendeten Produkte sicherzustellen.`,
          fr: `L'utilisateur est seul responsable de la vérification des allergènes des ingrédients, du respect des règles de sécurité alimentaire et de la qualité des produits utilisés.`,
          it: `L'utente è l'unico responsabile della verifica degli allergeni degli ingredienti, del rispetto delle norme di sicurezza alimentare e della qualità dei prodotti utilizzati.`,
        }},
      ],
    },
    {
      title: { ru: '6. Оплата и возврат средств', en: '6. Payment and Refunds', uk: '6. Оплата та повернення коштів', es: '6. Pago y reembolsos', de: '6. Zahlung und Rückerstattungen', fr: '6. Paiement et remboursements', it: '6. Pagamento e rimborsi' },
      blocks: [
        { type: 'p', text: {
          ru: `Culinary Randomizer является платным приложением. Оплата производится через официальные магазины приложений — Google Play или App Store.`,
          en: `Culinary Randomizer is a paid application. Payment is made through the official app stores — Google Play or the App Store.`,
          uk: `Culinary Randomizer є платним застосунком. Оплата здійснюється через офіційні магазини застосунків — Google Play або App Store.`,
          es: `Culinary Randomizer es una aplicación de pago. El pago se realiza a través de las tiendas oficiales de aplicaciones: Google Play o App Store.`,
          de: `Culinary Randomizer ist eine kostenpflichtige App. Die Zahlung erfolgt über die offiziellen App-Stores — Google Play oder App Store.`,
          fr: `Culinary Randomizer est une application payante. Le paiement s'effectue via les boutiques d'applications officielles — Google Play ou App Store.`,
          it: `Culinary Randomizer è un'app a pagamento. Il pagamento viene effettuato tramite gli store ufficiali — Google Play o App Store.`,
        }},
        { type: 'p', text: {
          ru: `Возврат средств осуществляется в соответствии с политикой возврата соответствующего магазина приложений (Google Play или App Store). Разработчик не обрабатывает платежи напрямую и не может гарантировать возврат средств в обход правил магазина.`,
          en: `Refunds are handled according to the refund policy of the respective app store (Google Play or App Store). The Developer does not process payments directly and cannot guarantee refunds outside the store's rules.`,
          uk: `Повернення коштів здійснюється відповідно до політики повернення відповідного магазину застосунків (Google Play або App Store). Розробник не обробляє платежі напряму і не може гарантувати повернення коштів в обхід правил магазину.`,
          es: `Los reembolsos se gestionan según la política de reembolsos de la tienda correspondiente (Google Play o App Store). El Desarrollador no procesa los pagos directamente y no puede garantizar reembolsos al margen de las normas de la tienda.`,
          de: `Rückerstattungen erfolgen gemäß der Rückerstattungsrichtlinie des jeweiligen App-Stores (Google Play oder App Store). Der Entwickler verarbeitet Zahlungen nicht direkt und kann Rückerstattungen außerhalb der Store-Regeln nicht garantieren.`,
          fr: `Les remboursements sont traités conformément à la politique de remboursement de la boutique concernée (Google Play ou App Store). Le Développeur ne traite pas les paiements directement et ne peut garantir de remboursement en dehors des règles de la boutique.`,
          it: `I rimborsi vengono gestiti secondo la politica di rimborso del rispettivo store (Google Play o App Store). Lo Sviluppatore non elabora direttamente i pagamenti e non può garantire rimborsi al di fuori delle regole dello store.`,
        }},
      ],
    },
    {
      title: { ru: '7. Возрастные ограничения', en: '7. Age Restrictions', uk: '7. Вікові обмеження', es: '7. Restricciones de edad', de: '7. Altersbeschränkungen', fr: "7. Restrictions d'âge", it: '7. Limiti di età' },
      blocks: [
        { type: 'p', text: {
          ru: `Приложением могут пользоваться лица старше 13 лет. Используя Приложение, вы подтверждаете, что соответствуете данному возрастному требованию.`,
          en: `The App may be used by persons aged 13 and older. By using the App, you confirm that you meet this age requirement.`,
          uk: `Застосунком можуть користуватися особи віком від 13 років. Використовуючи Застосунок, ви підтверджуєте, що відповідаєте цій віковій вимозі.`,
          es: `La App puede ser utilizada por personas mayores de 13 años. Al usar la App, confirmas que cumples con este requisito de edad.`,
          de: `Die App darf von Personen ab 13 Jahren genutzt werden. Durch die Nutzung der App bestätigst du, dass du diese Altersanforderung erfüllst.`,
          fr: `L'Application peut être utilisée par des personnes âgées de 13 ans et plus. En utilisant l'Application, vous confirmez que vous remplissez cette condition d'âge.`,
          it: `L'App può essere utilizzata da persone di età pari o superiore a 13 anni. Utilizzando l'App, confermi di soddisfare questo requisito di età.`,
        }},
      ],
    },
    {
      title: { ru: '8. Ограничение ответственности', en: '8. Limitation of Liability', uk: '8. Обмеження відповідальності', es: '8. Limitación de responsabilidad', de: '8. Haftungsbeschränkung', fr: '8. Limitation de responsabilité', it: '8. Limitazione di responsabilità' },
      blocks: [
        { type: 'p', text: {
          ru: `Приложение предоставляется «как есть» (as is), без каких-либо гарантий, явных или подразумеваемых.`,
          en: `The App is provided "as is", without any warranties, express or implied.`,
          uk: `Застосунок надається «як є» (as is), без будь-яких гарантій, явних чи неявних.`,
          es: `La App se proporciona «tal cual», sin garantías de ningún tipo, ni expresas ni implícitas.`,
          de: `Die App wird „wie besehen" (as is) bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung.`,
          fr: `L'Application est fournie « telle quelle », sans aucune garantie expresse ou implicite.`,
          it: `L'App viene fornita «così com'è», senza garanzie di alcun tipo, espresse o implicite.`,
        }},
        { type: 'p', text: {
          ru: `Разработчик не гарантирует бесперебойную работу Приложения, отсутствие ошибок или полное соответствие ожиданиям пользователя.`,
          en: `The Developer does not guarantee uninterrupted operation of the App, the absence of errors, or that it will fully meet the user's expectations.`,
          uk: `Розробник не гарантує безперебійну роботу Застосунку, відсутність помилок або повну відповідність очікуванням користувача.`,
          es: `El Desarrollador no garantiza el funcionamiento ininterrumpido de la App, la ausencia de errores ni que cumpla plenamente con las expectativas del usuario.`,
          de: `Der Entwickler garantiert keinen unterbrechungsfreien Betrieb der App, keine Fehlerfreiheit und keine vollständige Erfüllung der Erwartungen des Nutzers.`,
          fr: `Le Développeur ne garantit pas le fonctionnement ininterrompu de l'Application, l'absence d'erreurs, ni sa pleine conformité aux attentes de l'utilisateur.`,
          it: `Lo Sviluppatore non garantisce il funzionamento ininterrotto dell'App, l'assenza di errori o la piena corrispondenza alle aspettative dell'utente.`,
        }},
        { type: 'p', text: {
          ru: `В максимально допустимой законом степени Разработчик не несёт ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования Приложения.`,
          en: `To the maximum extent permitted by law, the Developer is not liable for any direct or indirect damages arising from the use or inability to use the App.`,
          uk: `Максимально дозволеною законом мірою Розробник не несе відповідальності за будь-які прямі чи непрямі збитки, що виникли в результаті використання або неможливості використання Застосунку.`,
          es: `En la medida máxima permitida por la ley, el Desarrollador no será responsable de ningún daño directo o indirecto derivado del uso o la imposibilidad de usar la App.`,
          de: `Im gesetzlich maximal zulässigen Umfang haftet der Entwickler nicht für direkte oder indirekte Schäden, die durch die Nutzung oder Nichtnutzbarkeit der App entstehen.`,
          fr: `Dans toute la mesure permise par la loi, le Développeur ne peut être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation ou de l'impossibilité d'utiliser l'Application.`,
          it: `Nella misura massima consentita dalla legge, lo Sviluppatore non è responsabile per eventuali danni diretti o indiretti derivanti dall'uso o dall'impossibilità di utilizzare l'App.`,
        }},
      ],
    },
    {
      title: { ru: '9. Прекращение использования', en: '9. Termination of Use', uk: '9. Припинення використання', es: '9. Finalización del uso', de: '9. Beendigung der Nutzung', fr: "9. Fin de l'utilisation", it: "9. Cessazione dell'utilizzo" },
      blocks: [
        { type: 'p', text: {
          ru: `Разработчик оставляет за собой право прекратить поддержку или обновление Приложения в любое время без предварительного уведомления.`,
          en: `The Developer reserves the right to discontinue support or updates for the App at any time without prior notice.`,
          uk: `Розробник залишає за собою право припинити підтримку або оновлення Застосунку в будь-який час без попереднього повідомлення.`,
          es: `El Desarrollador se reserva el derecho de suspender el soporte o las actualizaciones de la App en cualquier momento sin previo aviso.`,
          de: `Der Entwickler behält sich das Recht vor, den Support oder Updates für die App jederzeit ohne vorherige Ankündigung einzustellen.`,
          fr: `Le Développeur se réserve le droit d'interrompre le support ou les mises à jour de l'Application à tout moment sans préavis.`,
          it: `Lo Sviluppatore si riserva il diritto di interrompere il supporto o gli aggiornamenti dell'App in qualsiasi momento senza preavviso.`,
        }},
        { type: 'p', text: {
          ru: `Пользователь может прекратить использование Приложения в любой момент, удалив его со своего устройства.`,
          en: `The user may stop using the App at any time by deleting it from their device.`,
          uk: `Користувач може припинити використання Застосунку в будь-який момент, видаливши його зі свого пристрою.`,
          es: `El usuario puede dejar de usar la App en cualquier momento eliminándola de su dispositivo.`,
          de: `Der Nutzer kann die Nutzung der App jederzeit beenden, indem er sie von seinem Gerät löscht.`,
          fr: `L'utilisateur peut cesser d'utiliser l'Application à tout moment en la supprimant de son appareil.`,
          it: `L'utente può smettere di utilizzare l'App in qualsiasi momento eliminandola dal proprio dispositivo.`,
        }},
      ],
    },
    {
      title: { ru: '10. Изменения соглашения', en: '10. Changes to This Agreement', uk: '10. Зміни угоди', es: '10. Cambios en este acuerdo', de: '10. Änderungen dieser Vereinbarung', fr: '10. Modifications du présent contrat', it: '10. Modifiche al presente accordo' },
      blocks: [
        { type: 'p', text: {
          ru: `Разработчик может время от времени обновлять условия настоящего соглашения. Актуальная версия всегда доступна внутри Приложения.`,
          en: `The Developer may update the terms of this agreement from time to time. The current version is always available inside the App.`,
          uk: `Розробник може час від часу оновлювати умови цієї угоди. Актуальна версія завжди доступна всередині Застосунку.`,
          es: `El Desarrollador puede actualizar los términos de este acuerdo de vez en cuando. La versión vigente siempre está disponible dentro de la App.`,
          de: `Der Entwickler kann die Bedingungen dieser Vereinbarung von Zeit zu Zeit aktualisieren. Die aktuelle Version ist stets in der App verfügbar.`,
          fr: `Le Développeur peut mettre à jour périodiquement les conditions du présent contrat. La version actuelle est toujours disponible dans l'Application.`,
          it: `Lo Sviluppatore può aggiornare periodicamente i termini del presente accordo. La versione attuale è sempre disponibile all'interno dell'App.`,
        }},
      ],
    },
    {
      title: { ru: '11. Применимое право', en: '11. Governing Law', uk: '11. Застосовне право', es: '11. Ley aplicable', de: '11. Anwendbares Recht', fr: '11. Droit applicable', it: '11. Legge applicabile' },
      blocks: [
        { type: 'p', text: {
          ru: `Настоящее соглашение регулируется законодательством Украины.`,
          en: `This agreement is governed by the laws of Ukraine.`,
          uk: `Ця угода регулюється законодавством України.`,
          es: `Este acuerdo se rige por las leyes de Ucrania.`,
          de: `Diese Vereinbarung unterliegt dem Recht der Ukraine.`,
          fr: `Le présent contrat est régi par le droit de l'Ukraine.`,
          it: `Il presente accordo è disciplinato dalla legge dell'Ucraina.`,
        }},
      ],
    },
    {
      title: { ru: '12. Контакты', en: '12. Contact', uk: '12. Контакти', es: '12. Contacto', de: '12. Kontakt', fr: '12. Contact', it: '12. Contatti' },
      blocks: [
        { type: 'p', text: {
          ru: `По всем вопросам, связанным с настоящим соглашением, можно связаться с Разработчиком по адресу: culinaryrandomizer.dev@gmail.com`,
          en: `For any questions related to this agreement, you can contact the Developer at: culinaryrandomizer.dev@gmail.com`,
          uk: `З усіх питань, пов'язаних із цією угодою, можна зв'язатися з Розробником за адресою: culinaryrandomizer.dev@gmail.com`,
          es: `Para cualquier pregunta relacionada con este acuerdo, puedes contactar al Desarrollador en: culinaryrandomizer.dev@gmail.com`,
          de: `Bei Fragen zu dieser Vereinbarung kannst du den Entwickler kontaktieren unter: culinaryrandomizer.dev@gmail.com`,
          fr: `Pour toute question relative au présent contrat, vous pouvez contacter le Développeur à l'adresse : culinaryrandomizer.dev@gmail.com`,
          it: `Per qualsiasi domanda relativa al presente accordo, puoi contattare lo Sviluppatore all'indirizzo: culinaryrandomizer.dev@gmail.com`,
        }},
      ],
    },
  ],
};

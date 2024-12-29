import { useLanguageStore } from "./LanguageChanger";

describe("Language Store", () => {
  it("should initialize language as 'ua'", () => {
    const store = useLanguageStore.getState();
    expect(store.language).toBe("ua");
  });

  it("should change language to 'eng'", () => {
    const { changeLanguage} = useLanguageStore.getState();
    changeLanguage("eng");
    const updatedLanguage = useLanguageStore.getState().language;
    console.log(updatedLanguage);

    expect(updatedLanguage).toBe("eng");
  });

  it("should persist the language change in sessionStorage", () => {
    const store = useLanguageStore.getState();
    store.changeLanguage("eng");
    expect(sessionStorage.getItem("language")).toBe(
      '{"state":{"language":"eng"},"version":0}'
    );
  });
});

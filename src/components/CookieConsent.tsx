import { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

type Consent = {
  analytics: boolean;
  privacy: boolean;
};

const setCookie = (key: string, value: string, maxAgeSeconds = 31536000) => {
  document.cookie = `${key}=${value}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax; Secure`;
};

const deleteCookieEverywhere = (name: string) => {
  const domains = [
    location.hostname,
    `.${location.hostname.replace(/^www\./, "")}`,
  ];
  const paths = ["/"];
  // cu și fără Domain
  domains.forEach((domain) => {
    paths.forEach((path) => {
      document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}; Domain=${domain}; SameSite=Lax; Secure`;
    });
  });
  document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax; Secure`;
};

const deleteGA = () => {
  ["_ga", "_gid", "_gat"].forEach(deleteCookieEverywhere);
  // _ga_* dinamice
  document.cookie.split(";").forEach((c) => {
    const n = c.split("=")[0].trim();
    if (/^_ga_/.test(n)) deleteCookieEverywhere(n);
  });
};

export default function CookieConsent() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [analytics, setAnalytics] = useState(false);
  const [privacy, setPrivacy] = useState(true);
  const [initialConsent, setInitialConsent] = useState<Consent | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");
    if (!saved) {
      onOpen();
    } else {
      try {
        const parsed: Consent = JSON.parse(saved);
        setAnalytics(parsed.analytics);
        setPrivacy(parsed.privacy);
        setInitialConsent(parsed);
      } catch {
        onOpen();
      }
    }
  }, [onOpen]);

  const saveConsent = (consent: Consent) => {
    const encoded = JSON.stringify(consent);
    localStorage.setItem("cookie_consent", encoded);
    setCookie("cookie_consent", encodeURIComponent(encoded));

    window.dispatchEvent(new Event("cookie:change"));
    window.dispatchEvent(new Event("storage"));

    if (!consent.analytics) deleteGA();

    const changed =
      !initialConsent ||
      consent.analytics !== initialConsent.analytics ||
      consent.privacy !== initialConsent.privacy;

    if (changed) window.location.reload();

    onClose();
  };

  const acceptAll = () => saveConsent({ analytics: true, privacy: true });
  const rejectAll = () => saveConsent({ analytics: false, privacy: false });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        placement="bottom-center"
        backdrop="opaque"
        classNames={{
          wrapper: "items-end justify-center md:items-end md:justify-start",
          base: "md:ml-6 md:mb-6 md:max-w-md rounded-2xl w-full max-w-2xl",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="text-black text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.svg"
                    alt="Generation Salez"
                    className="w-5 h-5 shrink-0"
                  />
                  <span>Cookies Generation Salez</span>
                </div>
              </ModalHeader>

              <ModalBody className="text-black text-sm md:text-base space-y-4">
                Utilizăm cookie-uri esențiale pentru buna funcționare a
                site-ului și cookie-uri opționale pentru a înțelege cum este
                folosit site-ul.
                <Accordion isCompact>
                  <AccordionItem
                    key="1"
                    aria-label="Setări Cookie"
                    title={
                      <span className="text-sm md:text-base">
                        Setări detaliate cookie
                      </span>
                    }
                  >
                    <div className="flex flex-col gap-3 mt-2 text-red-900">
                      <Checkbox isSelected isDisabled size="sm">
                        <span className="text-sm md:text-base">
                          Cookie-uri esențiale
                        </span>
                      </Checkbox>

                      <Checkbox
                        isSelected={analytics}
                        onValueChange={setAnalytics}
                        size="sm"
                      >
                        <span className="text-sm md:text-base">
                          Cookie-uri de analiză
                        </span>
                      </Checkbox>

                      <Checkbox
                        isSelected={privacy}
                        onValueChange={setPrivacy}
                        size="sm"
                      >
                        <span className="text-sm md:text-base">
                          Accept
                          <Link
                            href="/privacy-policy"
                            className="text-sm md:text-base text-blue-600 underline ml-1"
                          >
                            Politica de Confidențialitate
                          </Link>
                        </span>
                      </Checkbox>
                    </div>
                  </AccordionItem>
                </Accordion>
              </ModalBody>

              <ModalFooter className="flex justify-between items-start gap-4 mt-2">
                <Button
                  color="primary"
                  onPress={() => saveConsent({ analytics, privacy })}
                  className="text-sm font-semibold"
                >
                  Salveză preferențele
                </Button>

                <div className="flex flex-col gap-2">
                  <Button
                    color="default"
                    onPress={acceptAll}
                    className="text-sm font-semibold"
                  >
                    Acceptă tot
                  </Button>
                  <Button
                    color="default"
                    variant="ghost"
                    onPress={rejectAll}
                    className="text-sm font-semibold"
                  >
                    Refuză tot
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {!isOpen && (
        <div className="fixed bottom-4 left-4 z-40 flex items-center justify-center">
          <Button
            isIconOnly
            onPress={onOpen}
            className="bg-[#FAC308] text-black rounded-full shadow-lg hover:bg-white animate-fade-in"
            aria-label="Setări cookie"
          >
            <FiSettings className="w-5 h-5" />
          </Button>
        </div>
      )}
    </>
  );
}

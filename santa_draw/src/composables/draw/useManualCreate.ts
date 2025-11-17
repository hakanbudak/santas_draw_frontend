import { ref } from "vue";
import { useI18n } from "vue-i18n";
import confetti from "canvas-confetti";
import api from "@/services/api";
import type { Participant } from "@/components/draw/types";
import type { Ref } from "vue";

interface Options {
  participants: Ref<Participant[]>;
  requireAddress: Ref<boolean>;
  requirePhone: Ref<boolean>;
}

export function useManualCreate(options: Options) {
  const { t } = useI18n();
  const isCreatingEvent = ref(false);
  const showSuccessModal = ref(false);

  const handleCreateEvent = async () => {
    if (!options.participants.value.length) {
      alert(t("alerts.manualMissingParticipants"));
      return;
    }

    if (options.participants.value.length < 3) {
      alert(t("alerts.manualMinimumParticipants"));
      return;
    }

    isCreatingEvent.value = true;
    try {
      const payload = {
        addressRequired: options.requireAddress.value,
        phoneNumberRequired: options.requirePhone.value,
        participants: options.participants.value.map((p) => ({
          firstName: p.firstName,
          lastName: p.lastName,
          email: p.email,
          address: p.address || "",
          phone: p.phone || "",
        })),
      };

      await api.post("/api/v1/draws/manuel", payload);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#EF4444", "#10B981", "#3B82F6", "#F59E0B", "#8B5CF6"],
      });

      showSuccessModal.value = true;
    } catch (error) {
      console.error("Çekiliş oluşturulurken hata:", error);
      alert(t("alerts.manualCreateError"));
    } finally {
      isCreatingEvent.value = false;
    }
  };

  return {
    isCreatingEvent,
    showSuccessModal,
    handleCreateEvent,
  };
}


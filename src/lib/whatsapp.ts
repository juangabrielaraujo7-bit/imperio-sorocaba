import { business } from '../data/business';

/**
 * Gera um link do WhatsApp com mensagem pré-preenchida.
 * Use uma mensagem diferente por serviço/seção quando fizer sentido.
 *
 * @example getWhatsAppUrl(business.whatsapp.messages.home)
 */
export function getWhatsAppUrl(message: string = business.whatsapp.messages.home): string {
  const text = message.trim();
  const base = `https://wa.me/${business.whatsapp.number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

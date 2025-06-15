'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function WhatsAppButton() {
  useEffect(() => {
    // Función para inicializar el plugin cuando todos los scripts estén cargados
    const initWhatsAppPlugin = () => {
      if (window.$ && window.$.fn.whatsappChatSupport) {
        $('#button-w').whatsappChatSupport({
          defaultMsg: '',
        });
      } else {
        console.error('WhatsApp Chat Support plugin no está disponible');
      }
    };

    // Verificar si jQuery ya está cargado
    if (window.$) {
      initWhatsAppPlugin();
    } else {
      // Escuchar evento personalizado cuando jQuery esté listo
      document.addEventListener('jquery-loaded', initWhatsAppPlugin);
    }

    return () => {
      document.removeEventListener('jquery-loaded', initWhatsAppPlugin);
    };
  }, []);

  return (
    <>
      {/* Scripts en orden de dependencia */}
      <Script 
        src="/plugin/components/jQuery/jquery-1.11.3.min.js" 
        strategy="beforeInteractive"
        onLoad={() => document.dispatchEvent(new Event('jquery-loaded'))}
      />
      <Script 
        src="/plugin/components/moment/moment.min.js" 
        strategy="beforeInteractive"
      />
      <Script 
        src="/plugin/components/moment/moment-timezone-with-data.min.js" 
        strategy="beforeInteractive"
      />
      <Script 
        src="/plugin/whatsapp-chat-support.js" 
        strategy="lazyOnload"
        onLoad={() => {
          if (window.$) {
            $('#button-w').whatsappChatSupport({
              defaultMsg: '',
            });
          }
        }}
      />

      {/* Estructura del botón */}
      <div className="whatsapp_chat_support wcs_fixed_right" id="button-w">
        <div className="wcs_button_label">Contáctenos</div>
        <div className="wcs_button wcs_button_circle">
          <span className="fa fa-whatsapp"></span>
        </div>

        <div className="wcs_popup">
          <div className="wcs_popup_close">
            <span className="fa fa-close"></span>
          </div>
          <div className="wcs_popup_header">
            <span className="fa fa-whatsapp"></span>
            <strong>Secretaría ACS UNMSM</strong>
            <div className="wcs_popup_header_description">
                ¿Tienes preguntas sobre membresía, eventos o colaboraciones?
            </div>
          </div>
          <div className="wcs_popup_input" data-number="51994756667">
            <input  type="text" placeholder="Quiero saber más sobre el próximo evento..." />
            <i className="fa fa-play"></i>
          </div>
          <div className="wcs_popup_avatar">
            <img
              src="https://cdn.pixabay.com/photo/2022/03/01/08/11/call-center-7040784_1280.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
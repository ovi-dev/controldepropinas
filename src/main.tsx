import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
{/* <script src="//widget.simplybook.it/v2/widget/widget.js" type="text/javascript"></script><script type="text/javascript">var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/myauthenticbeauty.simplybook.it","theme":"default","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#e58500","display_item_mode":"block","booking_nav_bg_color":"#e58500","body_bg_color":"#ffffff","sb_review_image":"","dark_font_color":"#212121","light_font_color":"#ffffff","btn_color_1":"#e58500","sb_company_label_color":"#ffffff","hide_img_mode":"1","show_sidebar":"1","sb_busy":"#c7b3b3","sb_available":"#fdb922"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]}});
</script> */}
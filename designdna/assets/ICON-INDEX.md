# DesignDNA Icon Index

> **750 offline SVG icons** from Lucide (436) and Material Design (314).
> Copy any SVG directly into your project — no npm install, no network needed.

## How to Use

**Copy individual SVGs**:
```bash
cp designdna/assets/icons/lucide/actions/search.svg src/assets/icons/
```

**Copy entire category**:
```bash
cp -r designdna/assets/icons/lucide/navigation/ src/assets/icons/
```

**Use in React** (after copying):
```jsx
import { ReactComponent as SearchIcon } from './icons/search.svg';
// or import as URL:
import searchIcon from './icons/search.svg';
```

**Use in Vue**:
```vue
<img :src="require('@/assets/icons/search.svg')" alt="Search" />
```

**Use inline** (paste SVG content directly):
```html
<!-- Open the .svg file, copy its content, paste into your HTML -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ...>...</svg>
```

---

## Lucide Icons (436 icons, 20 categories)

> Source: https://lucide.dev/ | License: ISC | Style: Line/Outline

### actions (43)
`archive, bookmark, check, clipboard, copy, download, edit, expand, eye-off, eye, filter, grip-horizontal, grip-vertical, log-in, log-out, maximize, minimize, minus, pencil-line, pencil, plus, power, qr-code, refresh-ccw, refresh-cw, rotate-ccw, rotate-cw, save, scan, scissors, search, send, share-2, share, shrink, sort-asc, sort-desc, trash-2, trash, upload, x, zoom-in, zoom-out`

### charts (16)
`activity, bar-chart-2, bar-chart-3, bar-chart-4, bar-chart, chart-area, chart-bar, chart-column, chart-line, chart-no-axes-column, chart-pie, chart-spline, line-chart, pie-chart, trending-down, trending-up`

### commerce (21)
`badge-dollar-sign, banknote, barcode, box, coins, credit-card, gift, package, percent, piggy-bank, qr-code, receipt, shopping-bag, shopping-basket, shopping-cart, store, tag, tags, ticket, truck, wallet`

### communication (21)
`at-sign, contact, inbox, mail-check, mail-open, mail-x, mail, megaphone, message-circle, message-square, phone-call, phone-incoming, phone-off, phone-outgoing, phone, reply-all, reply, rss, send, user-check, users`

### devices (24)
`battery-charging, battery-full, battery-low, battery-medium, battery, bluetooth, camera, cpu, gamepad, hard-drive, headphones, keyboard, laptop, monitor, mouse, printer, signal, smartphone, speaker, tablet, tv, usb, watch, wifi`

### education (15)
`award, book-open, book, brain, calculator, glasses, graduation-cap, library, lightbulb, medal, notebook, pencil, presentation, school, trophy`

### files (32)
`book-marked, book-open, book, clipboard-check, clipboard-copy, clipboard-list, clipboard, file-archive, file-audio, file-check, file-code, file-image, file-json, file-minus, file-plus, file-search, file-spreadsheet, file-text, file-video, file-x, file, folder-check, folder-minus, folder-open, folder-plus, folder-x, folder, link-2, link, notebook, paperclip, unlink`

### finance (13)
`banknote, bitcoin, building-2, calculator, coins, credit-card, dollar-sign, euro, landmark, percent, piggy-bank, receipt, wallet`

### layout (25)
`align-center, align-justify, align-left, align-right, app-window, columns-2, columns-3, grid-2x2, grid-3x3, layout-dashboard, layout-grid, layout-list, layout-template, list-ordered, list, maximize-2, minimize-2, panel-bottom, panel-left, panel-right, panel-top, rows-2, rows-3, sidebar, table`

### maps (16)
`building, church, compass, earth, flag, globe, hotel, landmark, locate, map-pin-off, map-pin, map, navigation, route, satellite, waypoints`

### media (25)
`airplay, camera-off, camera, cast, circle-pause, circle-play, film, headphones, image, images, mic-off, mic, monitor-play, music, pause, play, podcast, radio, square-play, video-off, video, volume-1, volume-2, volume-x, volume`

### medical (17)
`accessibility, activity, apple, beaker, cross, droplet, ear, eye, heart-pulse, heart, pill, plus-circle, stethoscope, syringe, test-tube, test-tubes, thermometer`

### navigation (29)
`arrow-down-left, arrow-down, arrow-left, arrow-right, arrow-up-right, arrow-up, chevron-down, chevron-first, chevron-last, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-up, corner-down-left, corner-down-right, corner-up-left, corner-up-right, external-link, home, house, menu, move-down, move-left, move-right, move-up, navigation, redo, undo`

### security (18)
`alarm-clock-check, eye-off, eye, file-lock, fingerprint, folder-lock, key, lock-open, lock, scan-face, scan, shield-alert, shield-check, shield-off, shield-plus, shield, unlock, user-lock`

### settings (22)
`brush, bug, cloud, code-2, code, cog, cpu, database, drafting-compass, hammer, paintbrush, palette, pencil-ruler, pipette, plug, ruler, server, settings, sliders-horizontal, sliders-vertical, terminal, wrench`

### shapes (23)
`asterisk, at-sign, circle, diamond, divide, equal, hash, heart, hexagon, infinity, minus, octagon, omega, pentagon, percent, pi, plus, sigma, slash, square, star, triangle, x`

### status (30)
`activity, alert-circle, alert-triangle, award, badge-alert, badge-check, badge-x, bell-off, bell-ring, bell, check, circle-alert, circle-check, circle-x, flame, frown, heart, info, loader-circle, loader, medal, meh, smile, sparkles, star-half, star, thumbs-down, thumbs-up, trophy, zap`

### time (12)
`alarm-clock, calendar-check, calendar-days, calendar-minus, calendar-plus, calendar-x, calendar, clock, history, hourglass, timer, watch`

### users (15)
`accessibility, baby, circle-user, contact, id-card, square-user, user-check, user-cog, user-minus, user-plus, user-round-plus, user-round, user-x, user, users`

### weather (19)
`cloud-drizzle, cloud-fog, cloud-lightning, cloud-rain, cloud-snow, cloud-sun, cloud, droplet, moon, rainbow, snowflake, star, sun, sunrise, sunset, thermometer, umbrella, waves, wind`

---

## Material Design Icons (314 icons, 17 categories)

> Source: https://github.com/google/material-design-icons | License: Apache 2.0 | Style: Outlined
> **Variable font support**: Install `npm i material-symbols` for runtime weight/fill/grade/optical-size adjustment.

### actions (39)
`account_circle, bookmark, bookmark_border, cancel, check_circle, content_copy, content_cut, content_paste, delete, edit, favorite, favorite_border, help, help_outline, highlight_off, home, info, launch, lock, lock_open, login, logout, open_in_new, power_settings_new, print, redo, save, search, settings, shopping_cart, thumb_down, thumb_up, undo, verified, verified_user, visibility, visibility_off, zoom_in, zoom_out`

### av (26)
`equalizer, fast_forward, fast_rewind, image, mic, mic_off, movie, music_note, music_off, pause, photo_camera, play_arrow, playlist_play, queue_music, repeat, replay, shuffle, skip_next, skip_previous, stop, videocam, videocam_off, volume_down, volume_mute, volume_off, volume_up`

### communication (20)
`alternate_email, call, chat, chat_bubble, comment, contact_mail, contact_phone, contacts, email, forum, mail, message, notifications, notifications_active, notifications_none, notifications_off, phone, send, share, sms`

### content (24)
`add, archive, block, clear, create, drafts, filter_list, flag, font_download, forward, inbox, link, mail_outline, redo, remove, reply, reply_all, report, save, send, sort, text_format, unarchive, undo`

### device (13)
`battery_alert, battery_charging_full, battery_full, bluetooth, bluetooth_disabled, brightness_auto, dark_mode, gps_fixed, gps_off, light_mode, screen_rotation, signal_wifi_4_bar, signal_wifi_off`

### editor (17)
`format_align_center, format_align_justify, format_align_left, format_align_right, format_bold, format_italic, format_list_bulleted, format_list_numbered, format_quote, insert_chart, insert_link, insert_photo, mode_edit, publish, short_text, text_fields, title`

### files (21)
`attach_file, cloud, cloud_done, cloud_download, cloud_off, cloud_queue, cloud_upload, create_new_folder, description, file_copy, file_download, file_present, file_upload, folder, folder_open, folder_shared, insert_drive_file, note, note_add, snippet_folder, topic`

### hardware (23)
`computer, desktop_mac, desktop_windows, gamepad, headset, keyboard, laptop, laptop_mac, memory, mouse, phone_android, phone_iphone, router, security, smart_display, smart_screen, smartphone, speaker, tablet, tablet_android, tablet_mac, tv, watch`

### image (22)
`adjust, auto_fix_high, auto_fix_normal, blur_on, brightness_high, brightness_low, camera, camera_alt, collections, color_lens, contrast, crop, edit, filter, flip, image, palette, photo, photo_filter, rotate_left, rotate_right, tune`

### maps (25)
`directions, directions_bike, directions_boat, directions_bus, directions_car, directions_walk, flag, flight, hotel, local_airport, local_hospital, local_pharmacy, local_shipping, location_off, location_on, map, my_location, navigation, near_me, pin_drop, place, restaurant, satellite, store, terrain`

### navigation (27)
`apps, arrow_back, arrow_back_ios, arrow_downward, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_forward_ios, arrow_upward, chevron_left, chevron_right, close, double_arrow, expand_less, expand_more, first_page, fullscreen, fullscreen_exit, last_page, menu, more_horiz, more_vert, refresh, subdirectory_arrow_left, subdirectory_arrow_right, unfold_less, unfold_more`

### notification (8)
`email, mark_email_read, mark_email_unread, notifications, notifications_active, notifications_none, notifications_off, sms`

### places (14)
`apartment, business, church, home, hotel, house, local_bar, local_cafe, local_dining, local_gas_station, local_mall, local_parking, restaurant, school`

### social (15)
`emoji_emotions, emoji_events, emoji_objects, emoji_people, emoji_symbols, group, group_add, people, person, person_add, person_remove, person_search, public, school, share`

### status (10)
`add_alert, check_circle, error, error_outline, info, notification_important, report, report_problem, warning, warning_amber`

### toggle (10)
`check_box, check_box_outline_blank, indeterminate_check_box, radio_button_checked, radio_button_unchecked, star, star_border, star_half, toggle_off, toggle_on`

---

## Quick Lookup Table

| I need an icon for... | Lucide | Material | Path |
|----------------------|--------|----------|------|
| Search | `search` | `search` | `lucide/actions/search.svg` |
| Close / Cancel | `x` | `close` | `lucide/actions/x.svg` |
| Menu / Hamburger | `menu` | `menu` | `lucide/navigation/menu.svg` |
| Settings / Gear | `settings` | `settings` | `lucide/settings/settings.svg` |
| User / Profile | `user` | `person` | `lucide/users/user.svg` |
| Home | `home` | `home` | `lucide/navigation/home.svg` |
| Edit / Pencil | `pencil` | `edit` | `lucide/actions/pencil.svg` |
| Delete / Trash | `trash-2` | `delete` | `lucide/actions/trash-2.svg` |
| Download | `download` | `file_download` | `lucide/actions/download.svg` |
| Upload | `upload` | `file_upload` | `lucide/actions/upload.svg` |
| Save | `save` | `save` | `lucide/actions/save.svg` |
| Copy | `copy` | `content_copy` | `lucide/actions/copy.svg` |
| Share | `share-2` | `share` | `lucide/actions/share-2.svg` |
| Filter | `filter` | `filter_list` | `lucide/actions/filter.svg` |
| Sort | `sort-asc` | — | `lucide/actions/sort-asc.svg` |
| Email / Mail | `mail` | `email` | `lucide/communication/mail.svg` |
| Phone / Call | `phone` | `call` | `lucide/communication/phone.svg` |
| Message / Chat | `message-circle` | `chat` | `lucide/communication/message-circle.svg` |
| Notification / Bell | `bell` | `notifications` | `lucide/status/bell.svg` |
| Star / Favorite | `star` | `star` | `lucide/status/star.svg` |
| Heart / Like | `heart` | `favorite` | `lucide/status/heart.svg` |
| Cart / Shopping | `shopping-cart` | `shopping_cart` | `lucide/commerce/shopping-cart.svg` |
| Calendar | `calendar` | — | `lucide/time/calendar.svg` |
| Clock / Time | `clock` | — | `lucide/time/clock.svg` |
| Lock / Security | `lock` | `lock` | `lucide/security/lock.svg` |
| Eye / Show | `eye` | `visibility` | `lucide/actions/eye.svg` |
| Eye Off / Hide | `eye-off` | `visibility_off` | `lucide/actions/eye-off.svg` |
| Check / Success | `check` | `check_circle` | `lucide/status/check.svg` |
| Warning / Alert | `alert-triangle` | `warning` | `lucide/status/alert-triangle.svg` |
| Error / Danger | `circle-x` | `error` | `lucide/status/circle-x.svg` |
| Info | `info` | `info` | `lucide/status/info.svg` |
| Plus / Add | `plus` | `add` | `lucide/shapes/plus.svg` |
| Minus / Remove | `minus` | `remove` | `lucide/shapes/minus.svg` |
| Arrow Left / Back | `arrow-left` | `arrow_back` | `lucide/navigation/arrow-left.svg` |
| Arrow Right / Forward | `arrow-right` | `arrow_forward` | `lucide/navigation/arrow-right.svg` |
| Chevron Down / Expand | `chevron-down` | `expand_more` | `lucide/navigation/chevron-down.svg` |
| Play | `play` | `play_arrow` | `lucide/media/play.svg` |
| Pause | `pause` | `pause` | `lucide/media/pause.svg` |
| Image / Photo | `image` | `image` | `lucide/media/image.svg` |
| Folder | `folder` | `folder` | `lucide/files/folder.svg` |
| File / Document | `file-text` | `description` | `lucide/files/file-text.svg` |
| Link | `link` | `link` | `lucide/files/link.svg` |
| Map / Location | `map-pin` | `location_on` | `lucide/maps/map-pin.svg` |
| Globe / World | `globe` | `public` | `lucide/maps/globe.svg` |

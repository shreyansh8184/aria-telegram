module.exports = Object.freeze({
  TOKEN: '1221360860:AAHm76l8WILPK9o1FqgDjfcjUgZVXlRzgH8',
  ARIA_SECRET: 'logchutiyehai',
  ARIA_DOWNLOAD_LOCATION: '/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1-Has6oOpoJnlNawvDXgdt7OAcxJ47Er1',
  SUDO_USERS: [1022210873, 919262859],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-482219935],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['jasmineroy612@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@Levibhaibot"
  },
  IS_TEAM_DRIVE: false
});

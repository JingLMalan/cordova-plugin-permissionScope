import exec from 'cordova/exec';

exports.init = (config, success, error) => {
  exec(success, error, 'PermissionScope',  'initialize', [ config ]);
};

const fns = [
  'addNotificationsPermission',
  'addLocationWhileInUsePermission',
  'addLocationAlwaysPermission',
  'addContactsPermission',
  'addEventsPermission',
  'addMicrophonePermission',
  'addCameraPermission',
  'addPhotosPermission',
  'addRemindersPermission',
  'addBluetoothPermission',
  'addMotionPermission'
];

fns.forEach((fn) => {
  exports[fn] = (message, success, error) => {
    exec(success, error, 'PermissionScope', 'addPermission', [ fn, message ] );
  };
})

exports.show = (success, error) => {
  exec(success, error, 'PermissionScope',  'show');
};

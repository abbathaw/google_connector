module.exports = { checkType: (mimeType, options) => {
    switch (mimeType) {
        case 'application/vnd.google-apps.folder':
            Object.assign(options.data.root, {
                iconType: 'devtools-folder-open',
                editBtnText: 'Open Folder',
                disabled: 'disabled'
            });
            break;
        default:
            Object.assign(options.data.root, {
                iconType: 'edit',
                editBtnText: 'Edit',
                disabled: ''
            });
            break;
    }
} };
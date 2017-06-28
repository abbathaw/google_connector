
function loadDonwloadHelper(fileId, mimeType, filename) {

var exportUrls = getExportableType(fileId, mimeType);

var defaultDownload = exportUrls.shift();
   
   $('.drive-download').click(e => window.open(defaultDownload.downloadUrl));
            
            $('.drive').each((index, each) => {    

                if (exportUrls.length > 0) {
                    
                    const $elemDownloadListDiv = $(each).find('.drive-download-list');
                    exportUrls.forEach(each => {
                        const params = Object.assign(each, { filename });
                        $elemDownloadListDiv.append("<li><a href='"+params.downloadUrl+"' download>Download As "+params.format+"</a></li>");
                    });
                } else {
                    $(each).find('.aui-dropdown2-trigger').attr('disabled', true);
                }
            })
        };

function getExportableType(fileId, mimeType) {
    const exportType = {
        DOCX: 'docx',
        ODT: 'odt',
        RTF: 'rtf',
        TXT: 'txt',
        PDF: 'pdf',
        ZIP: 'zip',
        EPUB: 'epub',
        HTML: 'html',
        XLSX: 'xlsx',
        ODS: 'ods',
        CSV: 'csv',
        TSV: 'tsv',
        PPTX: 'pptx',
        JPG: 'jpeg',
        PNG: 'png',
        SVG: 'svg'
    };

    switch(mimeType) {
        case 'application/vnd.google-apps.document':
            return [
                {format: 'Microsoft Word', downloadUrl: getDocsUrl(fileId, exportType.DOCX)},
                {format: 'Open Office doc', downloadUrl: getDocsUrl(fileId, exportType.ODT)},
                {format: 'PDF', downloadUrl: getDocsUrl(fileId, exportType.PDF)},
                {format: 'EPUB', downloadUrl: getDocsUrl(fileId, exportType.EPUB)},
                {format: 'HTML', downloadUrl: getDocsUrl(fileId, exportType.HTML)},
                {format: 'Plain text', downloadUrl: getDocsUrl(fileId, exportType.TXT)},
                {format: 'Rich text', downloadUrl: getDocsUrl(fileId, exportType.RTF)},
                {format: 'ZIP', downloadUrl: getDocsUrl(fileId, exportType.ZIP)}
            ];
        case 'application/vnd.google-apps.drawing':
            return [
                {format: 'PNG', downloadUrl: getDrawUrl(fileId, exportType.PNG)},
                {format: 'JPEG', downloadUrl: getDrawUrl(fileId, exportType.JPG)},
                {format: 'SVG', downloadUrl: getDrawUrl(fileId, exportType.SVG)},
                {format: 'PDF', downloadUrl: getDrawUrl(fileId, exportType.PDF)}
            ];
        case 'application/vnd.google-apps.presentation':
            return [
                {format: 'Microsoft Powerpoint', downloadUrl: getSlideUrl(fileId, exportType.PPTX)},
                {format: 'PDF', downloadUrl: getSlideUrl(fileId, exportType.PDF)},
                {format: 'Plain text', downloadUrl: getSlideUrl(fileId, exportType.TXT)}
            ];
        case 'application/vnd.google-apps.form':
            return [
                {format: 'CSV', downloadUrl: getFormUrl(fileId)}
            ];
        case 'application/vnd.google-apps.spreadsheet':
            return [
                {format: 'Microsoft Excel', downloadUrl: getSpreadsheetUrl(fileId, exportType.XLSX)},
                {format: 'Open Office sheet', downloadUrl: getSpreadsheetUrl(fileId, exportType.ODS)},
                {format: 'PDF', downloadUrl: getSpreadsheetUrl(fileId, exportType.PDF)},
                {format: 'CSV', downloadUrl: getSpreadsheetUrl(fileId, exportType.CSV)},
                {format: 'TSV', downloadUrl: getSpreadsheetUrl(fileId, exportType.TSV)},
                {format: 'ZIP', downloadUrl: getSpreadsheetUrl(fileId, exportType.ZIP)}
            ];
        case 'application/vnd.google-apps.drive-sdk.796396377186':
        case 'application/vnd.google-apps.map':
            return [
                {format: 'KMZ', downloadUrl: getMapUrl(fileId)}
            ];
        default:
            return [
                {format: 'Unknown', downloadUrl: getUnsupportedUrl(fileId)}
            ];
    }
}

function getDocsUrl(fileId, format) {
    return `https://docs.google.com/document/export?format=${format}&id=${fileId}`;
}

function getSpreadsheetUrl(fileId, format) {
    return `https://docs.google.com/spreadsheets/export?format=${format}&id=${fileId}`;
}

function getSlideUrl(fileId, format) {
    return `https://docs.google.com/presentation/export/${format}?id=${fileId}`;
}

function getDrawUrl(fileId, format) {
    return `https://docs.google.com/drawings/export/${format}?id=${fileId}`;
}

function getFormUrl(fileId) {
    return `https://docs.google.com/forms/d/${fileId}/downloadresponses?tz_offset=28800000`;
}

function getMapUrl(fileId) {
    return `https://www.google.com/maps/d/kml?mid=${fileId}`;
}

function getUnsupportedUrl(fileId) {
    return `https://docs.google.com/uc?authuser=0&id=${fileId}&export=download`;
}

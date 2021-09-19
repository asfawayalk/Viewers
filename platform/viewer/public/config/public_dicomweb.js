window.config = {
  routerBasename: '/',
  showStudyList: true,
  servers: {
    // dicomWeb: [
    //   {
    //     name: 'DCM4CHEE',
    //     wadoUriRoot: 'http://localhost:8899/wado',
    //     qidoRoot: 'http://localhost:8899/dicom-web',
    //     wadoRoot: 'http://localhost:8899/dicom-web',
    //     qidoSupportsIncludeField: true,
    //     imageRendering: 'wadors',
    //     thumbnailRendering: 'wadors',
    //     supportsFuzzyMatching: true,
    //   },
    // ],
    dicomWeb: [
      {
        name: 'Orthanc',
        wadoUriRoot: 'http://localhost:8899/wado',
        qidoRoot: 'http://localhost:8899/dicom-web',
        wadoRoot: 'http://localhost:8899/dicom-web',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
      },
    ],
  },
  i18n: {
    LOCIZE_PROJECTID: 'a8da3f9a-e467-4dd6-af33-474d582a0294',
    LOCIZE_API_KEY: null, // Developers can use this to do in-context editing. DO NOT COMMIT THIS KEY!
    USE_LOCIZE: false,
  },
};

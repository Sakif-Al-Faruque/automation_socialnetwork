module.exports = {
    ui: 'bdd',
    reporter: 'mochawesome',
    'reporter-option': [
        'overwrite=true',
        'reportTitle=My-App-Report',
        'showPassed=true',
        "reportFilename: [status]_[datetime]-[name]-report",
    ],
};
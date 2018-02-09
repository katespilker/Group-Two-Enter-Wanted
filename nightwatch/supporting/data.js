module.exports = {
    goodData: {
        input: {
            // This test has information for both enter wanted, and modify wanted. This is for the tests (submitting, and canceling before submitting. Also, choose which sex and race you want to use.)
            WQ26: {
                WID: '1234567890',
                hdr: 'ASDFeiw$  s',
                mke: 'Ad#',
                oai: '12345Sfer',
                nam: 'Joseph Hansen',
                sexFemale: 'Female',
                sexMale: 'Male',
                sexUnknown: 'Unknown',
                sexOther: 'Other',
                sex: '',
                race: '',
                raceAsian: 'Asian / Pacific Islander',
                raceBlack: 'Black',
                raceHispanic: 'Hispanic',
                raceIndian: 'American Indian / Alaskan Indian',
                raceWhite: 'White',
                raceUnknown: 'Unknown',
                hgt: '505',
                wgt: '130',
                hai: 'brown',
                off: 'ADdo3$ms  ',
                dow: '02022017',
                oln: '34DS34s#s',
                ols: 'CA',
                oly: '02182019',
                lic: '34Dsdo3',
                lis: 'Ut',
                liy: '12122020'
            },
            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: 'ASDFeiw$ s.Ad#.12345Sfer.Joseph Hansen.M.W.505.130.brown.ADdo3$ms .2002-02-02.34DS34s#s.CA.2019-02-18.34Dsdo3.UT.2020-12-12'
            },
            // This test is for both modify and enter wanted. The only difference is that it doesn't include optional information on the enter wanted page
            WQ23: {
                WID: '1234567890',
                hdr: 'ASDFeiw$  s',
                mke: 'Ad#',
                oai: '12345Sfer',
                nam: 'Joseph Hansen',
                sexFemale: 'Female',
                sexMale: 'Male',
                sexUnknown: 'Unknown',
                sexOther: 'Other',
                sex: '',
                race: '',
                raceAsian: 'Asian / Pacific Islander',
                raceBlack: 'Black',
                raceHispanic: 'Hispanic',
                raceIndian: 'American Indian / Alaskan Indian',
                raceWhite: 'White',
                raceUnknown: 'Unknown',
                hgt: '505',
                wgt: '130',
                hai: 'brown',
                off: 'ADdo3$ms  ',
                dow: '02022017',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '1234567890.ASDFeiw$ s.Ad#.12345Sfer.Joseph Hansen.M.W.505.130.brown.ADdo3$ms .2017-12-12......'
            },
            // cancel wanted
            WQ216: {
                WID: '1234445692',
                RFC: 'I felt like it',
                DOC: '12122019'
            }
        }
    },
    badData: {
        input: {
            // all invalid data
            WQ28: {
                WID: 'JHsld45692',
                hdr: '           ',
                mke: '123',
                oai: 'sl..fs.!9',
                nam: '       ',
                sexFemale: 'Female',
                sexMale: 'Male',
                sexUnknown: 'Unknown',
                sexOther: 'Other',
                sex: '',
                race: '',
                raceAsian: 'Asian / Pacific Islander',
                raceBlack: 'Black',
                raceHispanic: 'Hispanic',
                raceIndian: 'American Indian / Alaskan Indian',
                raceWhite: 'White',
                raceUnknown: 'Unknown',
                hgt: 'fif',
                wgt: 'one',
                hai: '12345',
                off: '.........  ',
                dow: '',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            }
        },
            output: {
            header: 'Errors Received:',
            errorList: {
                hdr: `The "Header" field must be included.`,
                mke: `The "MKE" field can only include characters from the English Alphabet or special characters.`,
                oai: `The "Originating Agency Identifier" field has one or more periods, which are unacceptable in any field.`,
                nam: `The "Name" field must be included.`,
                sex: `The "Sex" field must be included.`,
                race: `The "Race / Ethnicity" field must be included.`,
                hgt: `The "Height" field can only include numeric characters.`,
                hgt: `The "Height" field needs to have a value greater than 0.`,
                wgt: `The "Weight" field can only include numeric characters.`,
                wgt: `The "Weight" field needs to have a value greater than 0.`,
                hai: `The "Hair" field can only include characters from the English Alphabet or special characters.`,
                off: `The "Offense" field has one or more periods, which are unacceptable in any field.`,
                dow: `The "Date of Warrant/Violation" field must be included.`
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: ''
        },
        // some invalid and some valid data
        WQ210: {
            WID: 'JHsld45692',
            hdr: 'sdlkds1232sw',
            mke: '123',
            oai: 'sl..fs.!9',
            nam: 'Mark Twain',
            sexFemale: 'Female',
            sexMale: 'Male',
            sexUnknown: 'Unknown',
            sexOther: 'Other',
            sex: '',
            race: '',
            raceAsian: 'Asian / Pacific Islander',
            raceBlack: 'Black',
            raceHispanic: 'Hispanic',
            raceIndian: 'American Indian / Alaskan Indian',
            raceWhite: 'White',
            raceUnknown: 'Unknown',
            hgt: '504',
            wgt: '110',
            hai: '12345',
            off: '12wsedrftg',
            dow: '12122002',
            oln: '',
            ols: '',
            oly: '',
            lic: '',
            lis: '',
            liy: ''
        },
        WQ217: {
            WID: 'JHsld45692',
            RFC: '.........     ',
            DOC: '01010001'
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                WID: `The "Warrant ID" field can only include numeric characters.`,
                RFC: `The "Reason for Cancellation" field has one or more periods, which are unacceptable in any field.`,
                DOC: `The "Date of Cancellation" field can only include characters from the English Alphabet or numeric characters.`
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: ''
        },
        WQ216: {
            WID: 'JHsld45692',
            RFC: 'I felt like it',
            DOC: '12122019'
        },
        //Enter Wanted
        WQ27: {
            hdr: '123abc!@#',
            mke: 'A#+',
            ori: 'def456ghi',
            nam: 'A1#',
            sex: 'unknown',
            rac: 'unknown',
            hgt: '000',
            wgt: '0',
            hai: 'red',
            off: 'AB12#',
            dow: '01/01/1900',
            oln: '1',
            ols: 'UT',
            old: '01/01/1900',
            lic: 'AB123',
            lis: 'HI',
            lid: '01/01/1900'
        },
        //Modify Wanted (same Test Case-just added 0 at the end so we can distinguish the difference)
        WQ270: {
            wid: '1234567890',
            hdr: '123abc!@#',
            mke: 'A#+',
            ori: 'def456ghi',
            nam: 'A1#',
            sex: 'unknown',
            rac: 'unknown',
            hgt: '000',
            wgt: '0',
            hai: 'red',
            off: 'AB12#',
            dow: '01/01/1900',
            oln: '1',
            ols: 'UT',
            old: '01/01/1900',
            lic: 'AB123',
            lis: 'HI',
            lid: '01/01/1900'
        },
        //Enter Wanted
        WQ211: {
            hdr: 'Header',
            mke: '#',
            ori: 'def456gh',
            nam: 'A1',
            sex: '',
            rac: '',
            hgt: '00',
            wgt: '',
            hai: 're',
            off: 'AB12',
            dow: '01/01/1899',
            oln: '',
            ols: 'A',
            old: '',
            lic: 'AB12',
            lis: 'H',
            lid: '01/01/1899'
        },
        //Modify Wanted 
        WQ2110: {
            wid: '123',
            hdr: 'Header',
            mke: '#',
            ori: 'def456gh',
            nam: 'A1',
            sex: '',
            rac: '',
            hgt: '00',
            wgt: '',
            hai: 're',
            off: 'AB12',
            dow: '01/01/1899',
            oln: '',
            ols: 'A',
            old: '',
            lic: 'AB12',
            lis: 'H',
            lid: '01/01/1899'
        },
        //Enter Wanted
        WQ229: {
            hdr: '',
            mke: '',
            ori: '',
            nam: '',
            sex: '',
            rac: '',
            hgt: '',
            wgt: '',
            hai: '',
            off: '',
            dow: '',
            oln: '',
            ols: '',
            old: '',
            lic: '',
            lis: '',
            lid: ''
        },
        //Modify wanted (WID can't be empty or submit button is disabled.)
        WQ2290: {
            wid: '123',
            hdr: '',
            mke: '',
            ori: '',
            nam: '',
            sex: '',
            rac: '',
            hgt: '',
            wgt: '',
            hai: '',
            off: '',
            dow: '',
            oln: '',
            ols: '',
            old: '',
            lic: '',
            lis: '',
            lid: ''
        },
        //Cancel Wanted Min
        WQ2192: {
            wid: '1234567890',
            res: 'because 123',
            dat: '01/01/1900'
        },
        //Cancel Wanted <Min
        WQ2192: {
            wid: '123456789',
            res: 'because',
            dat: '01/01/1899'
        },
        //Cancel Wanted Empty Fields
        WQ2192: {
            wid: '123',
            res: '',
            dat: ''
        }
    }
}
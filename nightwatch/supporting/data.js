module.exports = {

    goodData: {
        input: {
            // This test has information for both enter wanted, and modify wanted. This is for the tests (submitting, and canceling before submitting. Also, choose which sex and race you want to use.)
            WQ26: {
                wid: '1234567890',
                hdr: 'ASDFeiw$  s',
                mke: 'Ad#',
                ori: '12345Sfer',
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
                old: '02182019',
                lic: '34Dsdo3',
                lis: 'UT',
                lid: '12122020',

                output: {
                    header: 'Valid',
                    errorList: '',
                    queryTitle: 'Assembled Query:',
                    assembledQueryEnter: 'ASDFeiw$ s.Ad#.12345Sfer.Joseph Hansen.M.W.505.130.brown.ADdo3$ms .2017-02-02.34DS34s#s.CA.2019-02-18.34Dsdo3.UT.2020-12-12',
                    assembledQueryModify: '1234567890.ASDFeiw$ s.Ad#.12345Sfer.Joseph Hansen.M.W.505.130.brown.ADdo3$ms .2017-02-02.34DS34s#s.CA.2019-02-18.34Dsdo3.UT.2020-12-12'
                }
            },
            // This test is for both modify and enter wanted. The only difference is that it doesn't include optional information on the enter wanted page
            WQ23: {
                wid: '1234567890',
                hdr: 'ASDFeiw$  s',
                mke: 'Ad#',
                ori: '12345Sfer',
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
                old: '',
                lic: '',
                lis: '',
                lid: '',

                output: {
                    header: 'Valid',
                    errorList: '',
                    queryTitle: 'Assembled Query:',
                    assembledQueryEnter: 'ASDFeiw$ s.Ad#.12345Sfer.Joseph Hansen.M.W.505.130.brown.ADdo3$ms .2017-02-02......',
                    assembledQueryModify: '1234567890.ASDFeiw$ s.Ad#.12345Sfer.Joseph Hansen.M.W.505.130.brown.ADdo3$ms .2017-02-02......'
                }
            },
            // cancel wanted
            WQ216: {
                wid: '1234445692',
                RFC: 'I felt like it',

                DOC: '12122019',

                output: {
                    header: 'Valid',
                    errorList: '',
                    queryTitle: 'Assembled Query:',
                    assembledQueryEnter: '1234445692.I felt like it. 12122019'
                }
            }
        },
        badData: {
            input: {
                // all invalid data. First submit then clear
                WQ28: {
                    wid: 'JHsld45692',
                    hdr: '           ',
                    mke: '123',
                    ori: 'sl..fs.!9',
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
                    old: '',
                    lic: '',
                    lis: '',
                    lid: '',
                    output: {
                        header: 'Errors Received:',
                        errorList: {
                            hdr: `The "Header" field must be included.`,
                            mke: `The "MKE" field can only include characters from the English Alphabet or special characters.`,
                            ori: `The "Originating Agency Identifier" field has one or more periods, which are unacceptable in any field.`,
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
                    }
                },
            // some invalid and some valid data
=======
                DOC: '12122019'
            }
        }
    },
    badData: {
        input: {
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
            },
            WQ210: {
                wid: 'JHsld45692',
                hdr: 'sdlkds1232sw',
                mke: '123',
                ori: 'sl..fs.!9',
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
                old: '',
                lic: '',
                lis: '',
                lid: '',
                output: {
                    header: 'Errors Received:',
                    errorList: {
                        mke: `The "MKE" field can only include characters from the English Alphabet or special characters.`,
                        ori: `The "Originating Agency Identifier" field has one or more periods, which are unacceptable in any field.`,
                        race: `The "Race / Ethnicity" field must be included.`,
                        hai: `The "Hair" field can only include characters from the English Alphabet or special characters.`,
                    },
                    queryTitle: 'No results generated due to error.',
                    assembledQuery: ''
                }
            },
            //submit invalid information
            WQ217: {
                wid: 'JHsld45692',
                RFC: '.........     ',

                DOC: '01010001',

                output: {
                    header: 'Errors Received:',
                    errorList: {
                        wid: `The "Warrant ID" field can only include numeric characters.`,
                        RFC: `The "Reason for Cancellation" field has one or more periods, which are unacceptable in any field.`,
                        DOC: `The "Date of Cancellation" field can only include characters from the English Alphabet or numeric characters.`
                    },
                    queryTitle: 'No results generated due to error.',
                    assembledQuery: ''
                }
            },
            //clear the data before saving
            WQ218: {
                wid: 'JHsld45692',
                RFC: 'I. felt. like. it.',
                DOC: '',

                output: {
                    header: 'Errors Received:',
                    errorList: '',
                    queryTitle: 'Submit query for validation.',
                    assembledQuery: ''
                    }
                }
            }
            },
    //Enter Wanted and Modify Wanted 
    WQ27: {
        wid: '1234567890', //modify wanted only
        hdr: '123abc!@#',
        mke: 'A#+',
        ori: 'def456ghi',
        nam: 'A1#',
        sex: 'unknown',
        rac: 'unknown',
        hgt: '001',
        wgt: '1',
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
    //Enter Wanted and Modify Wanted 
    WQ211: {
        wid: '123', //modify wanted only
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
        old: '01/01/1899',
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
        //Enter Wanted and Modify Wanted
        WQ229: {
            wid: '123', //Modify Wanted only (submit button disabled if this field is left empty)
            hdr: '123', //(submit button disabled if this field is left empty)
            hdr2: '',
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
        WQ2191: {
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
        WQ2193: {
            wid: ' ',
            res: ' ',
            dat: ''
        },
        goodData: {
            WQ29: {
                //Enter Wanted Max Characters
                hdr: "Johnson1234567890$#",
                mke: "Ab*&",
                oai: "J8765kI90",
                nam: "MR. Bingo Big Daddy $$$!!!!!!!",
                sex: "Unknown",
                rac: "American Indian / Alaskan Native",
                hgt: "190",
                wgt: "999",
                hai: "blackerish",
                off: "123456789Zsw@#$",
                dow: "02/07/2018",
                oln: "aBcdef!23$567896Hnj*",
                ols: "TX",
                old: "01/31/2023",
                lic: "12345Hui",
                lis: "HI",
                lid: "04/06/2041",
            },
            WQ253: {
                //Modify Wanted Max Characters
                wid: "1278569032",
                hdr: "^yh8i(kmtred$3234Ft",
                mke: "hu*!",
                oai: "456iOKuj0",
                nam: "My name is what I want it to b",
                sex: "Female",
                rac: "White",
                hgt: "098",
                wgt: "999",
                hai: "chocolatey",
                off: "ju6^89iesryy3!s",
                dow: "10/19/1981",
                oln: "JKio98765%7)(jnye#)t",
                ols: "CA",
                old: "04/16/2005",
                lic: "Mai7629j",
                lis: "MN",
                lid: "07/19/1978",
            },
            WQ259: {
                //Cancel Wanted Max Characters
                wid: "8903456217",
                res: "Im cancelling this because I want to and I do what I want Its just the way I am plus the convict game me a some mon$y and promised me a tower of gold!",
                date: "09/15/2007",
            },

            badData: {
                WQ227: {
                    //Enter Wanted > max valid                
                    hdr: "Johnson1234567890$#R",
                    mke: "Ab*&x",
                    oai: "J8765kI90t",
                    nam: "MR. Bingo Big Daddy $$$!!!!!!!K",
                    sex: "Unknown",
                    rac: "American Indian / Alaskan Native",
                    hgt: "1900",
                    wgt: "9999",
                    hai: "blackerishy",
                    off: "123456789Zsw@#$t",
                    dow: "02/07/2018",
                    oln: "aBcdef!23$567896Hnj*m",
                    ols: "TXS",
                    old: "01/31/2023",
                    lic: "12345Huim",
                    lis: "HII",
                    lid: "04/06/2041",

                },
                WQ250: {
                    // Modify Wanted > max valid
                    wid: "12345678902",
                    hdr: "Johnson1234567890$#R",
                    mke: "Ab*&x",
                    oai: "J8765kI90t",
                    nam: "MR. Bingo Big Daddy $$$!!!!!!!K",
                    sex: "Unknown",
                    rac: "American Indian / Alaskan Native",
                    hgt: "1900",
                    wgt: "9999",
                    hai: "blackerishy",
                    off: "123456789Zsw@#$t",
                    dow: "02/07/2018",
                    oln: "aBcdef!23$567896Hnj*m",
                    ols: "TXS",
                    old: "01/31/2023",
                    lic: "12345Huim",
                    lis: "HII",
                    lid: "04/06/2041",
                },
                WQ260: {
                    //Cancel Wanted > max valid
                    wid: "90672843679",
                    res: "Im cancelling this because I want to and I do what I want Its just the way I am plus the convict game me a some mon$$y and promised me a tower of gold!",
                    date: "09/20/1929",
                },
                WQ234: {
                    //Enter Wanted max invalid
                    hdr: "Johnson1234567890$",
                    mke: "123",
                    oai: "&%$(*%)",
                    nam: "MR. Bingo Big Daddy $$$!!!!!!!",
                    sex: "Unknown",
                    rac: "American Indian / Alaskan Native",
                    hgt: "H*r",
                    wgt: "wt.",
                    hai: "123456&*()",
                    off: "123456789Zsw@#",
                    dow: "02/07/2018",
                    oln: "aBcdef!23$567896Hnj*",
                    ols: "23",
                    old: "01/31/2000",
                    lic: "!@#$%^&*",
                    lis: "&^",
                    lid: "04/06/1900",
                },
                WQ257: {
                    //Modify Wanted invalid max characters
                    wid: "UYLiy%&*Wd",
                    hdr: "yiui908754^&3w#frui",
                    mke: "1234",
                    oai: "!@#$%^&*(",
                    nam: "people have names others dont!",
                    sex: "male",
                    rac: "Black",
                    hgt: "REg",
                    wgt: "tal",
                    hai: "12345^&*()",
                    off: "Doing bad Stuff",
                    dow: "10/15/2012",
                    oln: "!@#$%^&*()(*&^%$#@!#",
                    ols: "RX",
                    old: "10/12/1917",
                    lic: "(*&!@%()",
                    lis: "16",
                    lid: "07/18/1974",
                },
                WQ261: {
                    //Cancel Wanted invalid max characters
                    wid: "*&uijyrw#$",
                    res: "Sometimes people ch@nge their minds and that*s ok They always say th@# whatever you decide is going to be ok Whos they you ask The people I said that!",
                    date: "10/17/1976"
                },


            },

        }
    }


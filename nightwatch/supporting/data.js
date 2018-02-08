module.exports = {
    //Enter Wanted
    WQ27 : {
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
    WQ270 : {
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
    WQ211 : {
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
    WQ2110 : {
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
    WQ229 : {
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
    WQ2290 : {
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
    WQ2192 : {
        wid: '1234567890',
        res: 'because 123',
        dat: '01/01/1900'
    },
    //Cancel Wanted <Min
    WQ2192 : {
        wid: '123456789',
        res: 'because',
        dat: '01/01/1899'
    },
    //Cancel Wanted Empty Fields
    WQ2192 : {
        wid: '123',
        res: '',
        dat: ''
    }

}
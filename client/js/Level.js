const levelSample = [
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'G',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W', 'PS',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
]

const levelTest = [
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'G',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'G',  'W', ],
    [  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R', 'WF',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R', 'WF',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W', 'PS',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
]

const levelOne = [
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
    [  'W', 'PS',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'W',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'R',  'W',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'W',  'R',  'W',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'G',  'G',  'W',  'W', ],
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
]

const levelSpiral = [
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
    [  'W', 'PS',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'G',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
]

const levelDiff = [
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
    [  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'W',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'W',  'R',  'R',  'R',  'W',  'W',  'W',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'W',  'W',  'W',  'R',  'R',  'R',  'W',  'W',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'R',  'R',  'W', ],
    [  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'R',  'R',  'W',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'R',  'W', ],
    [  'W', 'PS',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'R',  'R',  'R',  'W', ],
    [  'W',  'R',  'R',  'R',  'R',  'W',  'W',  'R',  'R',  'R',  'R',  'W',  'W',  'W',  'W',  'W',  'W',  'G',  'G',  'W',  'W',  'W',  'W',  'W',  'W',  'R',  'R',  'R',  'W',  'W', ],
    [  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W',  'W', ],
]
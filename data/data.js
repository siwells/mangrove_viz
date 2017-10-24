sadfacedata = {
    nodes: [
        { data: { id: 'a1', content: 'Every person is going to die', 
            type: 'atom', typeshape: 'roundrectangle' }, 
            classes: 'atom-label' },
        { data: { id: 'a2', content: 'You are a person', 
            type: 'atom', typeshape: 'roundrectangle' },
            classes: 'atom-label' },
        { data: { id: 'a3', content: 'If you are going to die then you should treasure every moment',
            type: 'atom', typeshape: 'roundrectangle' }, 
            classes: 'atom-label' },
        { data: { id: 'a4', content: 'You are going to die', 
            type: 'atom', typeshape: 'roundrectangle' }, 
            classes: 'atom-label' },
        { data: { id: 'a5', content: 'You should treasure every moment', 
            type: 'atom', typeshape: 'roundrectangle' },
            classes: 'atom-label' },

        { data: { id: 's1', content: 'Default\nSupport', type: 'scheme', typeshape: 'diamond'  },
            classes: 'scheme-label' },
        { data: { id: 's2', content: 'Default\nSupport', type: 'scheme', typeshape: 'diamond'  },
            classes: 'scheme-label'},
        ],
    edges: [

        { data: { id: 'a1s1', source: 'a1', target: 's1' } },
        { data: { id: 'a2s1', source: 'a2', target: 's1' } },
        { data: { id: 'a3s2', source: 'a3', target: 's2' } },
        { data: { id: 's2a5', source: 's2', target: 'a5' } },
        { data: { id: 's1a4', source: 's1', target: 'a4' } },
        { data: { id: 'a4s2', source: 'a4', target: 's2' } },
        ]
}


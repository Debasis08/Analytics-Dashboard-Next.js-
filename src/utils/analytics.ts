type AnalyticsArgs = {
    retension: number
}

export class Analytics {
    private retention: number = 60 * 60 * 24 * 7

    constructor(opts?: AnalyticsArgs) {
        if(opts?.retension) this.retention = opts.retension
    }

    async track(namespace: string, event: object = {}) {
        // db call to persist this event
    }
}

export const analytics = new Analytics()
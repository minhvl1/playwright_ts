type DirectiveConfigSchema =
    | 'allow-with-description'
    | {
    descriptionFormat?: string;
}
    | boolean;

type Options = [
    {
        'ts-check'?: DirectiveConfigSchema;
        'ts-expect-error'?: DirectiveConfigSchema;
        'ts-ignore'?: DirectiveConfigSchema;
        'ts-nocheck'?: DirectiveConfigSchema;
        minimumDescriptionLength?: number;
    },
];

const defaultOptionsRecommended: Options = [
    {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
    },
];



// These options are merged on top of the recommended defaults
const defaultOptionsStrict: Options = [{ minimumDescriptionLength: 10 }];


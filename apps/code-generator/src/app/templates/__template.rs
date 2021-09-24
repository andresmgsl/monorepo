use anchor_lang::prelude::*;

declare_id!("{{program.id}}");

#[program]
pub mod {{program.name}} {
    use super::*;
}

#[account]
pub struct {{program.name}}Application {
    pub authority: Pubkey,
    pub count: u64,
    pub name: [u8; 32],
}

{{#each program.collections}}

#[account]
pub struct {{this.name}} {
    pub authority: Pubkey,
    pub bump: u8,
    pub application: Pubkey,

    {{#each this.attrs}}
    {{this}},
    {{/each}}
}

{{#each this.documents}}
#[account]
pub struct {{this.name}} {
    pub authority: Pubkey,
    pub bump: u8,
    pub application: Pubkey,
    pub collection: Pubkey,

    {{#each this.attrs}}
    {{this}},
    {{/each}}
}
{{/each}}

{{/each}}
use anchor_lang::prelude::*;

declare_id!("{{program.id}}");

#[program]
pub mod {{program.name}} {
    use super::*;

    {{#each program.collections}}
    {{#each this.instructions}}
    pub fn {{this.name.snakeCase}}(ctx: Context<{{this.name.pascalCase}}>,{{#each this.arguments}}{{this.name.pascalCase}}:{{this.attributeType}},{{/each}}) -> ProgramResult {
        // To implement
    }
    {{/each}}
    {{/each}}
}

#[account]
pub struct {{program.name.pascalCase}} {
    pub authority: Pubkey,
    pub count: u64,
    pub name: [u8; 32],
}

{{#each program.collections}}
#[account]
pub struct {{this.name.pascalCase}} {
    pub authority: Pubkey,
    pub bump: u8,
    pub application: Pubkey,

    {{#each this.attributes}}
    pub {{this.name.snakeCase}}: {{this.attributeType}},
    {{/each}}
}
{{#each this.instructions}}

#[derive(Accounts)]
#[instruction({{#each this.arguments}}{{this.name.snakeCase}}:{{this.attributeType}},{{/each}})]
pub struct {{this.name.pascalCase}}<'info>{
    #[account(
        init
    )]
    //TODO
}
{{/each}}
{{/each}}
